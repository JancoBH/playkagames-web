import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from '@angular/router';
import {SeoService} from '../../../../shared/seo';

@Component({
  selector: 'app-info',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setSeo({
      title: 'How to Play - Logika | Playka Games',
      description:
        'Learn how to play Logika, get tips, and find answers to common questions about modes, puzzle pieces, and offline play.',
      url: 'https://www.playkagames.com/logika/how-to-play',
      image: 'https://www.playkagames.com/assets/og/logika-how-to-play.jpg', // opcional
    });
  }

}
