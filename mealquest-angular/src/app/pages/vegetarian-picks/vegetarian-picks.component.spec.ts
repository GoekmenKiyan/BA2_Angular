import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetarianPicksComponent } from './vegetarian-picks.component';

describe('VegetarianPicksComponent', () => {
  let component: VegetarianPicksComponent;
  let fixture: ComponentFixture<VegetarianPicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VegetarianPicksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegetarianPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
