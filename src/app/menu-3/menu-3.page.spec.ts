import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Menu3Page } from './menu-3.page';

describe('Menu3Page', () => {
  let component: Menu3Page;
  let fixture: ComponentFixture<Menu3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
