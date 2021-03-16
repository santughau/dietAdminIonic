import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditFormDownloadPage } from './edit-form-download.page';

describe('EditFormDownloadPage', () => {
  let component: EditFormDownloadPage;
  let fixture: ComponentFixture<EditFormDownloadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormDownloadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditFormDownloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
