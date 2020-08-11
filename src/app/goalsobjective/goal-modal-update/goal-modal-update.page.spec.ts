import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalModalUpdatePage } from './goal-modal-update.page';

describe('GoalModalUpdatePage', () => {
  let component: GoalModalUpdatePage;
  let fixture: ComponentFixture<GoalModalUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalModalUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoalModalUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
