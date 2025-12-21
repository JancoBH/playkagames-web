import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-credits',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './credits.html',
  styleUrl: './credits.css',
})
export class Credits {

  creditsData = [
    {
      role: "Development",
      avatar: 'assets/logika/credits/janco.webp',
      members: [
        { name: "Janco Boscan", title: "Developer", link: "https://www.linkedin.com/in/jancobh/" },
      ],
    },
    {
      role: "Design",
      avatar: 'assets/logika/credits/Jessi.webp',
      members: [
        { name: "JessiFabre", title: "Art / Designer", link: "https://www.instagram.com/jessifabre_/" },
      ],
    },
    {
      role: "Music & Sound",
      avatar: 'assets/logika/credits/loikan.webp',
      members: [
        { name: "Loikan Music", title: "Composer / Sound Design", link: "https://www.youtube.com/@LoikanMusic" },
      ],
    }
  ]

}
