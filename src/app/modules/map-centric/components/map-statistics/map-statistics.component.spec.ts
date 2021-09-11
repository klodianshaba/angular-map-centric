import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStatisticsComponent } from './map-statistics.component';

describe('MapStatisticsComponent', () => {
  let component: MapStatisticsComponent;
  let fixture: ComponentFixture<MapStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
