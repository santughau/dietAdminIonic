import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.page.html',
  styleUrls: ['./edit-video.page.scss'],
})
export class EditVideoPage implements OnInit {
  videos: any = [];
  pageno = 1;
  pagesize = 10;
  term;
  constructor(
    private _router: Router,
    private service: MyServiceService,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.getData(null);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'All Download Completed ',
      duration: 2000,
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  }

  getData(ev) {
    if (ev == null) {
      this.pageno = 1;
      this.pagesize = 10;
      this.presentLoading().then(() => {
        this.service
          .getAllVideos(this.pageno, this.pagesize)
          .subscribe((data) => {
            this.videos = data.document.records;

            this.loadingController.dismiss();
          });
      });
    } else {
      this.pageno++;
      this.presentLoading().then(() => {
        this.service
          .getAllVideos(this.pageno, this.pagesize)
          .subscribe((data) => {
            this.videos = this.videos.concat(data.document.records);
            this.loadingController.dismiss();
            if (data.document.records.length <= 10) {
              ev.target.disabled = true;
              this.presentToast();
            }
          });
        ev.target.complete();
      });
    }
  }
  editwVideo(a) {
    console.log(a);
    this._router.navigate(['/edit-form-video', a]);
  }
}
