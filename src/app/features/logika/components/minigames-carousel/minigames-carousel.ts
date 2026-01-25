import {AfterViewInit, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID, ViewChild} from '@angular/core';
import {isPlatformBrowser, NgOptimizedImage} from '@angular/common';

interface MiniGame {
  name: string;
  image: string;
}

@Component({
  selector: 'app-minigames-carousel',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './minigames-carousel.html',
  styleUrl: './minigames-carousel.css',
})
export class MinigamesCarousel implements AfterViewInit, OnDestroy {
  @ViewChild('scrollRef', { static: true }) scrollRef!: ElementRef<HTMLDivElement>;

  private animationId: number | null = null;
  private scrollPosition = 0;
  private readonly speed = 0.5;
  private readonly isBrowser: boolean;

  miniGames: MiniGame[] = [
    { name: 'Luminous Route', image: '/assets/logika/minigames/luminou_route.webp' },
    { name: 'Robo Push', image: '/assets/logika/minigames/robo_push.webp' },
    { name: 'Fire Rescue', image: '/assets/logika/minigames/fire_rescue.webp' },
    { name: 'Tube Sort', image: '/assets/logika/minigames/tube_sort.webp' },
    { name: 'Color Clash', image: '/assets/logika/minigames/color_clash.webp' },
    { name: 'Light Guardian', image: '/assets/logika/minigames/light_guardian.webp' },
    { name: 'Mirror Path', image: '/assets/logika/minigames/mirror_path.webp' },
    { name: 'Number Path', image: '/assets/logika/minigames/number_path.webp' },
    { name: 'Circuit Connect', image: '/assets/logika/minigames/circuit_connect.webp' },
    { name: 'Signal Path', image: '/assets/logika/minigames/signal_path.webp' },
  ];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  // duplicados para loop infinito
  get duplicatedGames(): MiniGame[] {
    return [...this.miniGames, ...this.miniGames];
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const el = this.scrollRef.nativeElement;
    if (!el) return;

    const animate = () => {
      this.scrollPosition += this.speed;

      const halfScroll = el.scrollWidth / 2;
      if (this.scrollPosition >= halfScroll) {
        this.scrollPosition = 0;
      }

      el.scrollLeft = this.scrollPosition;
      this.animationId = window.requestAnimationFrame(animate);
    };

    this.animationId = window.requestAnimationFrame(animate);
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;

    if (this.animationId != null) {
      window.cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
}
