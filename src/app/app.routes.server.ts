import { RenderMode, ServerRoute } from '@angular/ssr';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

type BlogIndexItem = { slug: string };

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Ajustá la ruta a donde esté tu index.json en el build
      const filePath = join(process.cwd(), 'src', 'assets', 'blog', 'index.json');
      const raw = await readFile(filePath, 'utf-8');
      const posts: BlogIndexItem[] = JSON.parse(raw);

      return posts.map(p => ({ slug: p.slug }));
    },
  },
];
