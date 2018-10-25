import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntajePrimeroComponent } from './puntaje-primero.component';

describe('PuntajePrimeroComponent', () => {
  let component: PuntajePrimeroComponent;
  let fixture: ComponentFixture<PuntajePrimeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntajePrimeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntajePrimeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
