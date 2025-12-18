import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-privacy',
  imports: [],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy {
  constructor(private location: Location) {}

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Actualiza el hash sin recargar ni romper el router:
    this.location.replaceState(this.location.path(false).split('#')[0] + `#${id}`);
  }
}
