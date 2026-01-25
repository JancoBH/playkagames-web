import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {SeoService} from '../../../../shared/seo';

@Component({
  selector: 'app-terms',
  imports: [
    RouterLink
  ],
  templateUrl: './terms.html',
  styleUrl: './terms.css',
})
export class Terms implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setSeo({
      title: 'Terms of Service - Logika | Playka Games',
      description:
        'Read the Terms of Service for Logika by Playka Games, including license, acceptable use, ads, purchases, and limitations of liability.',
      url: 'https://www.playkagames.com/logika/terms',
    });
  }
}
