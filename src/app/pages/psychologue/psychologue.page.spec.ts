import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PsychologuePage } from './psychologue.page';

describe('PsychologuePage', () => {
  let component: PsychologuePage;
  let fixture: ComponentFixture<PsychologuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PsychologuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
