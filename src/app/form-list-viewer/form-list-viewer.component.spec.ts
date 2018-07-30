import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListViewerComponent } from './form-list-viewer.component';

describe('FormListViewerComponent', () => {
  let component: FormListViewerComponent;
  let fixture: ComponentFixture<FormListViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormListViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormListViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
