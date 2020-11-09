import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnregistrementPage } from './enregistrement.page';

describe('EnregistrementPage', () => {
  let component: EnregistrementPage;
  let fixture: ComponentFixture<EnregistrementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregistrementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnregistrementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
