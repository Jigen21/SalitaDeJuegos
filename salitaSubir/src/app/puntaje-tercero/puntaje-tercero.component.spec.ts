import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntajeTerceroComponent } from './puntaje-tercero.component';

describe('PuntajeTerceroComponent', () => {
  let component: PuntajeTerceroComponent;
  let fixture: ComponentFixture<PuntajeTerceroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntajeTerceroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntajeTerceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
