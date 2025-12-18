import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logika } from './logika';

describe('Logika', () => {
  let component: Logika;
  let fixture: ComponentFixture<Logika>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logika]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logika);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
