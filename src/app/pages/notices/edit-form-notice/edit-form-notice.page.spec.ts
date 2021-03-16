import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditFormNoticePage } from './edit-form-notice.page';

describe('EditFormNoticePage', () => {
  let component: EditFormNoticePage;
  let fixture: ComponentFixture<EditFormNoticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormNoticePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditFormNoticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
