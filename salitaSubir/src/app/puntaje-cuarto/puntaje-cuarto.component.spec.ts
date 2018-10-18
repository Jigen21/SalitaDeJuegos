import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntajeCuartoComponent } from './puntaje-cuarto.component';

describe('PuntajeCuartoComponent', () => {
  let component: PuntajeCuartoComponent;
  let fixture: ComponentFixture<PuntajeCuartoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntajeCuartoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntajeCuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
