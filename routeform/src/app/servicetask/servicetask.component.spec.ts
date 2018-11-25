import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicetaskComponent } from './servicetask.component';

describe('ServicetaskComponent', () => {
  let component: ServicetaskComponent;
  let fixture: ComponentFixture<ServicetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
