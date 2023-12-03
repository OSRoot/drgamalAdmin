import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Companies2Page } from './companies2.page';

describe('Companies2Page', () => {
  let component: Companies2Page;
  let fixture: ComponentFixture<Companies2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Companies2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
