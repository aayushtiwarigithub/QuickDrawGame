import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassListDialogComponent } from './class-list-dialog.component';

describe('ClassListDialogComponent', () => {
  let component: ClassListDialogComponent;
  let fixture: ComponentFixture<ClassListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassListDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
