import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinigamesCarousel } from './minigames-carousel';

describe('MinigamesCarousel', () => {
  let component: MinigamesCarousel;
  let fixture: ComponentFixture<MinigamesCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinigamesCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinigamesCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
