import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

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
export class Credits {

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
