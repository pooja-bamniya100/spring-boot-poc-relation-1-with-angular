import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUpdatePasswordComponent } from './login-update-password.component';

describe('LoginUpdatePasswordComponent', () => {
  let component: LoginUpdatePasswordComponent;
  let fixture: ComponentFixture<LoginUpdatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginUpdatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
