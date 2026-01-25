import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {SeoService} from '../../../../shared/seo';

@Component({
  selector: 'app-privacy',
  imports: [
    RouterLink
  ],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setSeo({
      title: 'Privacy Policy - Logika | Playka Games',
      description: 'Read the privacy policy of Logika by Playka Games.',
      url: 'https://www.playkagames.com/logika/privacy',
    });
  }

}
