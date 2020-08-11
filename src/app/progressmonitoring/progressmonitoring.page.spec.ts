import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgressmonitoringPage } from './progressmonitoring.page';

describe('ProgressmonitoringPage', () => {
  let component: ProgressmonitoringPage;
  let fixture: ComponentFixture<ProgressmonitoringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressmonitoringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressmonitoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
