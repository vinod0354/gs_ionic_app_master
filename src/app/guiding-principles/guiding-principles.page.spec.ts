import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuidingPrinciplesPage } from './guiding-principles.page';

describe('GuidingPrinciplesPage', () => {
  let component: GuidingPrinciplesPage;
  let fixture: ComponentFixture<GuidingPrinciplesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidingPrinciplesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuidingPrinciplesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
