import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPicksComponent } from './random-picks.component';

describe('RandomPicksComponent', () => {
  let component: RandomPicksComponent;
  let fixture: ComponentFixture<RandomPicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomPicksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
