import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsStateComponent } from './products-state.component';

describe('ProductsStateComponent', () => {
  let component: ProductsStateComponent;
  let fixture: ComponentFixture<ProductsStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
