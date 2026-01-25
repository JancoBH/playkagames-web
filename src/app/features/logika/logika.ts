import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MinigamesCarousel} from './components/minigames-carousel/minigames-carousel';
import {NgOptimizedImage} from '@angular/common';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-logika',
  imports: [
    RouterLink,
    MinigamesCarousel,
    NgOptimizedImage
  ],
  templateUrl: './logika.html',
  styleUrl: './logika.css',
})
export class Logika implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Logika | Puzzle Mini-Games Collection - Playka Games');
    this.meta.updateTag({
      name: 'description',
      content:
        'Logika is a collection of puzzle mini-games: 10 levels per mini-game, 4–6 puzzles per level, Normal Mode and Free Mode. Play offline anytime.',
    });
  }

  features = [
    {
      title: 'Multiple Puzzles',
      desc: 'Variety of mini-games',
      gradient: 'from-primary to-chart-4',
      pathD:
        'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
    },
    {
      title: 'Progressive',
      desc: 'Increasing difficulty',
      gradient: 'from-accent to-chart-5',
      pathD: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    },
    {
      title: 'Track Progress',
      desc: 'See your growth',
      gradient: 'from-chart-3 to-chart-5',
      pathD:
        'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
    {
      title: 'Offline Play',
      desc: 'No internet needed',
      gradient: 'from-chart-4 to-primary',
      pathD: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    },
  ];

}
