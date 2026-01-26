import { Component, computed, effect, inject, resource } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { marked } from 'marked';

import { toSignal } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, firstValueFrom, map } from 'rxjs';

import { BlogService } from '../../services/blog-service';
import { SeoService } from '../../../../shared/seo';

type BlogIndexItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  image?: string;
};

type BlogPostVM = {
  title: string;
  date: string;
  category?: string;
  image?: string;
  content: SafeHtml;
};

type LoadedPost = {
  slug: string;
  meta: BlogIndexItem;
  post: BlogPostVM;
};

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [NgClass, RouterLink, NgOptimizedImage],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css',
})
export class BlogDetail {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private sanitizer = inject(DomSanitizer);
  private seo = inject(SeoService);

  private readonly slug = toSignal<string | null>(
    this.route.paramMap.pipe(
      map(p => p.get('slug')),
      distinctUntilChanged()
    ),
    { initialValue: null }
  );

  private readonly postResource = resource<LoadedPost | null, string | null>({
    params: computed(() => this.slug()),
    loader: async ({ params }) => {
      const slug = params;
      if (!slug) return null;

      // 1) metadata desde index.json
      const index = await firstValueFrom(this.blogService.getIndex()); // <-- agregá este métod
      const meta = index.find(p => p.slug === slug);
      if (!meta) return null;

      // 2) contenido markdown
      const md = await firstValueFrom(this.blogService.getPost(slug)); // tu métod actual que trae el .md
      if (!md) return null;

      // 3) normalizar saltos de línea (evita “tod pegado”)
      const normalized = md.replace(/\r\n/g, '\n').trim();

      // 4) parsear markdown a HTML
      const html = marked.parse(normalized);

      const post: BlogPostVM = {
        title: meta.title,
        date: meta.date,
        category: meta.category,
        image: meta.image || '/assets/og/playka-promo.jpg',
        content: this.sanitizer.bypassSecurityTrustHtml(<string>html),
      };

      return { slug, meta, post };
    },
  });

  readonly loading = computed(() => this.postResource.isLoading());
  readonly errorMsg = computed(() =>
    this.postResource.error() ? 'Post not found or failed to load.' : ''
  );
  readonly post = computed(() => this.postResource.value()?.post ?? null);

  constructor() {
    effect(() => {
      const data = this.postResource.value();
      if (!data) return;

      this.seo.setSeo({
        title: data.meta.title,
        description: data.meta.excerpt || data.meta.title,
        url: `https://www.playkagames.com/blog/${data.slug}`,
        image: data.meta.image || undefined,
      });
    });
  }

  formatDate(date: string): string {
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return date;
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
  }

  getCategoryColor(category?: string): string {
    switch (category) {
      case 'Logika':
        return 'bg-primary/10 text-primary';
      case 'Studio':
        return 'bg-accent/10 text-accent';
      default:
        return 'bg-secondary text-foreground';
    }
  }
}
