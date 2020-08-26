import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActionDatePage } from './action-date.page';

describe('ActionDatePage', () => {
  let component: ActionDatePage;
  let fixture: ComponentFixture<ActionDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionDatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
