import { Component } from '@angular/core';
import {GameCard} from '../game-card/game-card';

export type GameCardModel = {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  iosComingSoon?: boolean;
  playStoreComingSoon?: boolean;
  learnMoreUrl?: string;
  accentColor?: string;
};

@Component({
  selector: 'app-game-section',
  imports: [
    GameCard
  ],
  templateUrl: './game-section.html',
  styleUrl: './game-section.css',
})
export class GameSection {
  games: GameCardModel[] = [
    {
      title: 'Logika',
      description:
        'A collection of brain-teasing puzzle mini-games in one app. Train your logic and problem-solving skills.',
      features: ['Multiple puzzles', 'Progressive difficulty', 'Offline play'],
      imageSrc: '/assets/logika/icon_logika_.png',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.playka.games.logika&referrer=src%3Dplaykagames.com',
      iosComingSoon: true,
      learnMoreUrl: '/logika',
      accentColor: 'from-primary/90 to-chart-4/70',
    },
    {
      title: 'Tube Sort',
      description:
        'Sort colorful balls into matching tubes in this relaxing yet challenging puzzle game.',
      features: ['Ball sorting', 'Relaxing gameplay', 'Hundreds of levels'],
      imageSrc: '/assets/tube_sort/tube_sort_logo.png',
      playStoreComingSoon: true,
      accentColor: 'from-accent/90 to-chart-5/70',
    },
  ];
}
