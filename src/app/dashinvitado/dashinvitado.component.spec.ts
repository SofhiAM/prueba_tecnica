import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashinvitadoComponent } from './dashinvitado.component';

describe('DashinvitadoComponent', () => {
  let component: DashinvitadoComponent;
  let fixture: ComponentFixture<DashinvitadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashinvitadoComponent]
    });
    fixture = TestBed.createComponent(DashinvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
