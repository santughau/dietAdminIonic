import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewNoticePage } from './view-notice.page';

describe('ViewNoticePage', () => {
  let component: ViewNoticePage;
  let fixture: ComponentFixture<ViewNoticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNoticePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewNoticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
