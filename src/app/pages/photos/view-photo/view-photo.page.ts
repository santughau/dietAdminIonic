import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.page.html',
  styleUrls: ['./view-photo.page.scss'],
})
export class ViewPhotoPage implements OnInit {
  images: any = [];

  pageno = 1;
  pagesize = 10;
  term;
  constructor(
    private service: MyServiceService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private route: Router
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
          .getAllImages(this.pageno, this.pagesize)
          .subscribe((data) => {
            this.images = data.document.records;

            this.loadingController.dismiss();
          });
      });
    } else {
      this.pageno++;
      this.presentLoading().then(() => {
        this.service
          .getAllImages(this.pageno, this.pagesize)
          .subscribe((data) => {
            this.images = this.images.concat(data.document.records);
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

  viewImg(id) {
    this.route.navigate(['/view-image', id]);
  }
}
