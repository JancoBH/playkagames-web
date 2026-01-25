import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [
    RouterLink
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Contact - Playka Games');
    this.meta.updateTag({
      name: 'description',
      content: "Get in touch with Playka Games. We'd love to hear from you!"
    });
  }
}
