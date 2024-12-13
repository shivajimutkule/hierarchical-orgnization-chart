import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeManagerComponent } from './change-manager.component';

describe('ChangeManagerComponent', () => {
  let component: ChangeManagerComponent;
  let fixture: ComponentFixture<ChangeManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeManagerComponent]
    });
    fixture = TestBed.createComponent(ChangeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
