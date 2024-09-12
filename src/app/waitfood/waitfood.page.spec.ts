import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaitfoodPage } from './waitfood.page';

describe('WaitfoodPage', () => {
  let component: WaitfoodPage;
  let fixture: ComponentFixture<WaitfoodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitfoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
