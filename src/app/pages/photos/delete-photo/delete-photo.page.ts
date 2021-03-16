import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/shared/my-service.service';
import {
  LoadingController,
  ToastController,
  AlertController,
} from '@ionic/angular';



@Component({
  selector: 'app-delete-photo',
  templateUrl: './delete-photo.page.html',
  styleUrls: ['./delete-photo.page.scss'],
})
export class DeletePhotoPage implements OnInit {
  images: any = [];
  deleteId: number;
  
  pageno = 1;
  pagesize = 10;
  term;
  data = {
    gallery_id: '',
    gallery_title: '',
    gallery_imgLink: '',
  };
  constructor(
    private service: MyServiceService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertController: AlertController,
    private router: Router
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
            console.log(this.images);

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

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Are You Want to Delete Following ?',
      message: this.data.gallery_title,
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          },
        },
        {
          text: 'Delete',
          handler: () => {
            this.service
              .deleteGallery(this.data.gallery_id)
              .subscribe((res) => {
                this.router.navigate(['/photo']);
              });
          },
        },
      ],
    });

    await alert.present();
  }

  deleteImg(id) {
    this.deleteId = id;
    this.presentLoading().then(() => {
      this.service.getSingleImage(this.deleteId).subscribe((res) => {
        this.data = res.document;
        this.loadingController.dismiss();
        this.presentAlertConfirm();
      });
    });
  }
}
