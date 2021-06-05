import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologueComponent } from './psychologue.component';

describe('PsychologueComponent', () => {
  let component: PsychologueComponent;
  let fixture: ComponentFixture<PsychologueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
