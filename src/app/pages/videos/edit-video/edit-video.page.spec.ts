import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditVideoPage } from './edit-video.page';

describe('EditVideoPage', () => {
  let component: EditVideoPage;
  let fixture: ComponentFixture<EditVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
