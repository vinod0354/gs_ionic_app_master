import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalModalPage } from './goal-modal.page';

describe('GoalModalPage', () => {
  let component: GoalModalPage;
  let fixture: ComponentFixture<GoalModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoalModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
