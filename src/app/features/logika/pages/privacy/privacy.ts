import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  imports: [
    RouterLink
  ],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy implements OnInit {
  constructor(
    private title: Title, private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Privacy Policy - Logika | Playka Games');
    this.meta.updateTag({
      name: 'description',
      content:
        'Learn how Playka Games collects, uses, and shares information when you use Logika, including ads and optional rewarded ads.',
    });
  }

}
