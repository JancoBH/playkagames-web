import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  imports: [
    RouterLink
  ],
  templateUrl: './terms.html',
  styleUrl: './terms.css',
})
export class Terms implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Terms of Service - Logika | Playka Games');
    this.meta.updateTag({
      name: 'description',
      content:
        'Read the Terms of Service for Logika by Playka Games, including license, acceptable use, ads, purchases, and limitations of liability.',
    });
  }
}
