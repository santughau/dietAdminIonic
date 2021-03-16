import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletePhotoPage } from './delete-photo.page';

describe('DeletePhotoPage', () => {
  let component: DeletePhotoPage;
  let fixture: ComponentFixture<DeletePhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePhotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletePhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
