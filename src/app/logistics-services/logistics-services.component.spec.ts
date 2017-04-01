import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsServicesComponent } from './logistics-services.component';

describe('LogisticsServicesComponent', () => {
  let component: LogisticsServicesComponent;
  let fixture: ComponentFixture<LogisticsServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
