import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildfilesComponent } from './childfiles.component';

describe('ChildfilesComponent', () => {
  let component: ChildfilesComponent;
  let fixture: ComponentFixture<ChildfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
