import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceCartPage } from './service-cart.page';

describe('ServiceCartPage', () => {
  let component: ServiceCartPage;
  let fixture: ComponentFixture<ServiceCartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
