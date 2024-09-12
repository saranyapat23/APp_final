import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WithricePage } from './withrice.page';

describe('WithricePage', () => {
  let component: WithricePage;
  let fixture: ComponentFixture<WithricePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WithricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
