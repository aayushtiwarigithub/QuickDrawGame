import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawDatasetComponent } from './draw-dataset.component';

describe('DrawDatasetComponent', () => {
  let component: DrawDatasetComponent;
  let fixture: ComponentFixture<DrawDatasetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawDatasetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
