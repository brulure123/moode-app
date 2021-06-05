import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutresPage } from './autres.page';

describe('AutresPage', () => {
  let component: AutresPage;
  let fixture: ComponentFixture<AutresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
