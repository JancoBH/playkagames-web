import { Component, Inject, PLATFORM_ID, computed, effect, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { take } from 'rxjs/operators';
import { SeoService } from '../../shared/seo';
import { BlogService } from './services/blog-service';

export interface BlogPostCard {
  slug: string;
  title: string;
  description?: string;
  excerpt?: string;
  date: string;
  image?: string;
  category?: string;
}

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  // ===== state (signals)
  readonly posts = signal<BlogPostCard[]>([]);
  readonly page = signal(1);
  readonly pageSize = signal(10);

  // ===== derived (computed)
  readonly totalPosts = computed(() => this.posts().length);

  readonly totalPages = computed(() => {
    const total = this.totalPosts();
    const size = this.pageSize();
    return Math.max(1, Math.ceil(total / size));
  });

  readonly startIndex = computed(() => (this.page() - 1) * this.pageSize());

  readonly endIndex = computed(() => {
    const end = this.startIndex() + this.pageSize();
    return Math.min(end, this.totalPosts());
  });

  readonly pagedPosts = computed(() => {
    const list = this.posts();
    return list.slice(this.startIndex(), this.endIndex());
  });

  constructor(
    private seo: SeoService,
    private blog: BlogService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // SEO una sola vez
    this.seo.setSeo({
      title: 'Blog - Playka Games',
      description:
        'News, tips, and development updates from Playka Games. Learn about our mobile puzzle games and how we build them.',
      url: 'https://www.playkagames.com/blog',
    });

    // Cargar data -> set signal
    this.blog
      .getIndex()
      .pipe(take(1))
      .subscribe({
        next: (posts) => {
          const sorted = (posts ?? [])
            .slice()
            .sort((a, b) => (a.date < b.date ? 1 : -1));
          this.posts.set(sorted);
        },
        error: () => this.posts.set([]),
      });

    // Si cambia posts/pageSize y la page queda fuera de rango, ajusta
    effect(() => {
      const tp = this.totalPages();
      const p = this.page();
      if (p > tp) this.page.set(tp);
      if (p < 1) this.page.set(1);
    });
  }

  nextPage(): void {
    if (this.page() < this.totalPages()) {
      this.page.update((p) => p + 1);
      this.scrollTop();
    }
  }

  prevPage(): void {
    if (this.page() > 1) {
      this.page.update((p) => p - 1);
      this.scrollTop();
    }
  }

  formatDate(dateStr: string): string {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  }

  private scrollTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
