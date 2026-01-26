import {Route} from "@angular/router";
import {Blog} from './blog';
import {BlogDetail} from './components/blog-detail/blog-detail';

export const BLOG_ROUTES: Route[] = [
  {path: '', component: Blog},
  {path: ':slug', component: BlogDetail}
]
