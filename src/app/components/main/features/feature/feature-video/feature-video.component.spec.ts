import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureVideoComponent } from './feature-video.component';

describe('FeatureVideoComponent', () => {
  let component: FeatureVideoComponent;
  let fixture: ComponentFixture<FeatureVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
