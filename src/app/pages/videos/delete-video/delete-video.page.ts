import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/shared/my-service.service';
import {
  LoadingController,
  ToastController,
  AlertController,
} from '@ionic/angular';

@Component({
  selector: 'app-delete-video',
  templateUrl: './delete-video.page.html',
  styleUrls: ['./delete-video.page.scss'],
})
export class DeleteVideoPage implements OnInit {
  videos: any = [];
  pageno = 1;
  pagesize = 10; 
  term;
  deleteId: number; 
  singleData = {
    youtube_id: '',
    youtube_title: '',
    youtube_videoLink: '',
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
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Are You Want to Delete Following ?',
      message: this.singleData.youtube_title,
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {},
        },
        {
          text: 'Delete',
          handler: () => {
            this.service
              .deleteVideo(this.singleData.youtube_id)
              .subscribe((res) => {
                this.router.navigate(['/video']);
              });
          },
        },
      ],
    });

    await alert.present();
  }

  openAlert(id) {
    this.deleteId = id;
    this.presentLoading().then(() => {
      this.service.getSingleVideoe(this.deleteId).subscribe((res) => {
        this.singleData = res.document;
        this.loadingController.dismiss();
        this.presentAlertConfirm();
      });
    });
  }
}