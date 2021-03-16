import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditFormVideoPage } from './edit-form-video.page';

describe('EditFormVideoPage', () => {
  let component: EditFormVideoPage;
  let fixture: ComponentFixture<EditFormVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditFormVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
