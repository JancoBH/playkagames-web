import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {SeoService} from '../../shared/seo';

@Component({
  selector: 'app-contact',
  imports: [
    RouterLink
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setSeo({
      title: 'Contact - Playka Games',
      description: "Get in touch with Playka Games. We'd love to hear from you!",
      url: 'https://www.playkagames.com/contact',
    });
  }
}
