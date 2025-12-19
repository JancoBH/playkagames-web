import {Route} from "@angular/router";
import {Logika} from './logika';
import {Privacy} from './pages/privacy/privacy';
import {Terms} from './pages/terms/terms';
import {Contact} from './pages/contact/contact';

export const LOGIKA_ROUTES: Route[] = [
  {path: '', component: Logika},
  {path: 'privacy', component: Privacy},
  {path: 'terms', component: Terms},
  {path: 'contact', component: Contact},
];
