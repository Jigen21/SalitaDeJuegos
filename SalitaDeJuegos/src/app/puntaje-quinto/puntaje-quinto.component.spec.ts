import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntajeQuintoComponent } from './puntaje-quinto.component';

describe('PuntajeQuintoComponent', () => {
  let component: PuntajeQuintoComponent;
  let fixture: ComponentFixture<PuntajeQuintoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntajeQuintoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntajeQuintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
