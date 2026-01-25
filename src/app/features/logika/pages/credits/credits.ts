import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {SeoService} from '../../../../shared/seo';

type TeamMember = {
  name: string;
  avatar: string;
  role: string;
  description: string;
  link: string;
  linkLabel: string;
  gradient: string;
  icon: 'linkedin' | 'instagram' | 'youtube';
};

@Component({
  selector: 'app-credits',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './credits.html',
  styleUrl: './credits.css',
})
export class Credits implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.setSeo({
      title: 'Credits - Logika | Playka Games',
      description:
        'Meet the people behind Logika. Discover the developer, artist, and music contributors who brought the game to life.',
      url: 'https://www.playkagames.com/logika/credits',
      image: 'https://www.playkagames.com/assets/og/logika-credits.jpg', // opcional
    });
  }

  team: TeamMember[] = [
    {
      name: 'Janco Boscan',
      avatar: 'assets/logika/credits/janco.webp',
      role: 'Developer',
      description: 'Game development and programming',
      link: 'https://www.linkedin.com/in/jancobh/',
      linkLabel: 'LinkedIn',
      gradient: 'from-primary to-chart-4',
      icon: 'linkedin',
    },
    {
      name: 'JessiFabre',
      avatar: 'assets/logika/credits/Jessi.webp',
      role: 'Art',
      description: 'Visual design and artwork',
      link: 'https://www.instagram.com/jessifabre_/',
      linkLabel: 'Instagram',
      gradient: 'from-accent to-chart-5',
      icon: 'instagram',
    },
    {
      name: 'Loikan Music',
      avatar: 'assets/logika/credits/loikan.webp',
      role: 'Composer / Sound Design',
      description: 'Music and sound effects',
      link: 'https://www.youtube.com/@LoikanMusic',
      linkLabel: 'YouTube',
      gradient: 'from-chart-3 to-chart-5',
      icon: 'youtube',
    },
  ];

}
