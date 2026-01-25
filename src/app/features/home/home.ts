import {Component, OnInit} from '@angular/core';
import {Hero} from './components/hero/hero';
import {GameSection} from './components/game-section/game-section';
import {About} from './components/about/about';
import {SeoService} from '../../shared/seo';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    GameSection,
    About
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setSeo({
      title: 'Playka Games | Mobile Puzzle Studio',
      description:
        'Playka Games is an indie studio creating fun, accessible puzzle and logic games for mobile. Discover Logika and upcoming games.',
      url: 'https://www.playkagames.com/',
    });
  }
}
