import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playables } from './playables';

describe('Playables', () => {
  let component: Playables;
  let fixture: ComponentFixture<Playables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Playables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Playables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
