import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Companies1Page } from './companies1.page';

describe('Companies1Page', () => {
  let component: Companies1Page;
  let fixture: ComponentFixture<Companies1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Companies1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
