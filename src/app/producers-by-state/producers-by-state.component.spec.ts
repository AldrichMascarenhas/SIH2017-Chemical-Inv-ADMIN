import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersByStateComponent } from './producers-by-state.component';

describe('ProducersByStateComponent', () => {
  let component: ProducersByStateComponent;
  let fixture: ComponentFixture<ProducersByStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducersByStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducersByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
