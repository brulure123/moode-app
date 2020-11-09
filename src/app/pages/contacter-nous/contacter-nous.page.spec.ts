import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContacterNousPage } from './contacter-nous.page';

describe('ContacterNousPage', () => {
  let component: ContacterNousPage;
  let fixture: ComponentFixture<ContacterNousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacterNousPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContacterNousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
