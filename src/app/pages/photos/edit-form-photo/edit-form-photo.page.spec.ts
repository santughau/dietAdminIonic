import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditFormPhotoPage } from './edit-form-photo.page';

describe('EditFormPhotoPage', () => {
  let component: EditFormPhotoPage;
  let fixture: ComponentFixture<EditFormPhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormPhotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditFormPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
