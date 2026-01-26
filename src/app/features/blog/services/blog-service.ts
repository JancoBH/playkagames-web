import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface BlogPostCard {
  slug: string;
  title: string;
  excerpt: string;
  date: string;      // ISO string
  category?: string;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class BlogService {
  constructor(private http: HttpClient) {}

  getIndex(): Observable<BlogPostCard[]> {
    return this.http.get<BlogPostCard[]>('/assets/blog/index.json');
  }

  getPost(slug: string): Observable<string> {
    return this.http.get(`/assets/blog/${slug}.md`, { responseType: 'text' });
  }

}
