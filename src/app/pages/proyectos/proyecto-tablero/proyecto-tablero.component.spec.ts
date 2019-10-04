import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoTableroComponent } from './proyecto-tablero.component';

describe('ProyectoTableroComponent', () => {
  let component: ProyectoTableroComponent;
  let fixture: ComponentFixture<ProyectoTableroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoTableroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoTableroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
