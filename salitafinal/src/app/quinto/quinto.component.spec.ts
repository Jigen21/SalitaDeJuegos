import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoComponent } from './quinto.component';

describe('QuintoComponent', () => {
  let component: QuintoComponent;
  let fixture: ComponentFixture<QuintoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
