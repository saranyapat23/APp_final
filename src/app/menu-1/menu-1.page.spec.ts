import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Menu1Page } from './menu-1.page';

describe('Menu1Page', () => {
  let component: Menu1Page;
  let fixture: ComponentFixture<Menu1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
