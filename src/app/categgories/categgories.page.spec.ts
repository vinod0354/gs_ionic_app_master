import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CateggoriesPage } from './categgories.page';

describe('CateggoriesPage', () => {
  let component: CateggoriesPage;
  let fixture: ComponentFixture<CateggoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateggoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CateggoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
