import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrarComponent } from './form-registrar.component';

describe('FormRegistrarComponent', () => {
  let component: FormRegistrarComponent;
  let fixture: ComponentFixture<FormRegistrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRegistrarComponent]
    });
    fixture = TestBed.createComponent(FormRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
