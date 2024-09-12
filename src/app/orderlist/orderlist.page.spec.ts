import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderlistPage } from './orderlist.page';

describe('OrderlistPage', () => {
  let component: OrderlistPage;
  let fixture: ComponentFixture<OrderlistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
