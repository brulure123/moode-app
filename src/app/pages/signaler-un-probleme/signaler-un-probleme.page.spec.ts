import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignalerUnProblemePage } from './signaler-un-probleme.page';

describe('SignalerUnProblemePage', () => {
  let component: SignalerUnProblemePage;
  let fixture: ComponentFixture<SignalerUnProblemePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalerUnProblemePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignalerUnProblemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
