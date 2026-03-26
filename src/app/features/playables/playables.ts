import {Component, OnInit} from '@angular/core';
import {SeoService} from '../../shared/seo';

@Component({
  selector: 'app-playables',
  imports: [],
  templateUrl: './playables.html',
  styleUrl: './playables.css',
})
export class Playables implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setSeo({
      title: 'Playables | Try Games Instantly | Playka Games',
      description:
        'Try playable demos in your browser—fast, mobile-friendly puzzle experiences from Playka Games. If you like it, get the full game on Android.',
      url: 'https://www.playkagames.com/playables',
      image: 'https://www.playkagames.com/assets/og/playka-playables.jpg',
    });
  }

}
