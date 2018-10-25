import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntajeSegundoComponent } from './puntaje-segundo.component';

describe('PuntajeSegundoComponent', () => {
  let component: PuntajeSegundoComponent;
  let fixture: ComponentFixture<PuntajeSegundoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntajeSegundoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntajeSegundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
