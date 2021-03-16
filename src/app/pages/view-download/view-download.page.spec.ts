import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewDownloadPage } from './view-download.page';

describe('ViewDownloadPage', () => {
  let component: ViewDownloadPage;
  let fixture: ComponentFixture<ViewDownloadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDownloadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDownloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
