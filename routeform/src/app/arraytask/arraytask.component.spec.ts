import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraytaskComponent } from './arraytask.component';

describe('ArraytaskComponent', () => {
  let component: ArraytaskComponent;
  let fixture: ComponentFixture<ArraytaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraytaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraytaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
