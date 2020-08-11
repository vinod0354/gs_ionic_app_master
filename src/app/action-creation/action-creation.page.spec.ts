import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActionCreationPage } from './action-creation.page';

describe('ActionCreationPage', () => {
  let component: ActionCreationPage;
  let fixture: ComponentFixture<ActionCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCreationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
