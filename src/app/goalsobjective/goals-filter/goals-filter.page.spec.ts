import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalsFilterPage } from './goals-filter.page';

describe('GoalsFilterPage', () => {
  let component: GoalsFilterPage;
  let fixture: ComponentFixture<GoalsFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsFilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoalsFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
