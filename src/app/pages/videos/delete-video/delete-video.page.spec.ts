import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteVideoPage } from './delete-video.page';

describe('DeleteVideoPage', () => {
  let component: DeleteVideoPage;
  let fixture: ComponentFixture<DeleteVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
