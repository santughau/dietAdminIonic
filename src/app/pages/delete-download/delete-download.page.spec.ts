import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteDownloadPage } from './delete-download.page';

describe('DeleteDownloadPage', () => {
  let component: DeleteDownloadPage;
  let fixture: ComponentFixture<DeleteDownloadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDownloadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteDownloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
