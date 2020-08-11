import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalsobjectivePage } from './goalsobjective.page';

describe('GoalsobjectivePage', () => {
  let component: GoalsobjectivePage;
  let fixture: ComponentFixture<GoalsobjectivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsobjectivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoalsobjectivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
