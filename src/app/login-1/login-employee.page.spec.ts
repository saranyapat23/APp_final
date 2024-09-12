import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginEmployeePage } from './login-employee.page';

describe('LoginEmployeePage', () => {
  let component: LoginEmployeePage;
  let fixture: ComponentFixture<LoginEmployeePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
