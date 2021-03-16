import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPhotoPage } from './edit-photo.page';

describe('EditPhotoPage', () => {
  let component: EditPhotoPage;
  let fixture: ComponentFixture<EditPhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPhotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
