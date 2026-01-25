import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('How to Play - Logika | Playka Games');
    this.meta.updateTag({
      name: 'description',
      content: 'Learn how to play Logika, get tips, and find answers to common questions about modes, puzzle pieces, and offline play.',
    });
  }

}
