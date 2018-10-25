import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalitaComponent } from './salita.component';

describe('SalitaComponent', () => {
  let component: SalitaComponent;
  let fixture: ComponentFixture<SalitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
