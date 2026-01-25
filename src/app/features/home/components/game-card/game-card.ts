import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-game-card',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './game-card.html',
  styleUrl: './game-card.css',
})
export class GameCard {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) features: string[] = [];
  @Input({ required: true }) imageSrc!: string;

  @Input() playStoreUrl?: string;
  @Input() appStoreUrl?: string;
  @Input() iosComingSoon?: boolean;
  @Input() playStoreComingSoon?: boolean;
  @Input() learnMoreUrl?: string;

  @Input() accentColor?: string = 'from-primary/80 to-accent/60';

  get imageAlt(): string {
    return `${this.title} game preview`;
  }

  get imageFinalSrc(): string {
    return this.imageSrc || '/placeholder.svg';
  }
}
