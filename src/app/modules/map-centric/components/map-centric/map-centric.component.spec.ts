import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCentricComponent } from './map-centric.component';

describe('MapCentricComponent', () => {
  let component: MapCentricComponent;
  let fixture: ComponentFixture<MapCentricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapCentricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCentricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
