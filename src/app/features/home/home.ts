import {Component, OnInit} from '@angular/core';
import {Hero} from './components/hero/hero';
import {GameSection} from './components/game-section/game-section';
import {About} from './components/about/about';
import {Meta, Title} from '@angular/platform-browser';

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
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Playka Games | Mobile Puzzle Studio');
    this.meta.updateTag({
      name: 'description',
      content:
        'Playka Games is an indie studio creating fun, accessible puzzle and logic games for mobile. Discover Logika and upcoming games.',
    });
  }
}
