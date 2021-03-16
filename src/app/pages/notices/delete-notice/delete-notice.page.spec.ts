import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteNoticePage } from './delete-notice.page';

describe('DeleteNoticePage', () => {
  let component: DeleteNoticePage;
  let fixture: ComponentFixture<DeleteNoticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteNoticePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteNoticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
