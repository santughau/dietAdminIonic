import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDownloadPage } from './edit-download.page';

describe('EditDownloadPage', () => {
  let component: EditDownloadPage;
  let fixture: ComponentFixture<EditDownloadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDownloadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDownloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
