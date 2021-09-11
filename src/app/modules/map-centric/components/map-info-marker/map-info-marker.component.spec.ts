import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapInfoMarkerComponent } from './map-info-marker.component';

describe('MapInfoMarkerComponent', () => {
  let component: MapInfoMarkerComponent;
  let fixture: ComponentFixture<MapInfoMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapInfoMarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapInfoMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
