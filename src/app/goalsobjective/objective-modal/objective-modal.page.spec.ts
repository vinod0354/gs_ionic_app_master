import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjectiveModalPage } from './objective-modal.page';

describe('ObjectiveModalPage', () => {
  let component: ObjectiveModalPage;
  let fixture: ComponentFixture<ObjectiveModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectiveModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjectiveModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
