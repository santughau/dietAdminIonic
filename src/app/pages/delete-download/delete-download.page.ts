import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../../shared/my-service.service';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-download',
  templateUrl: './delete-download.page.html',
  styleUrls: ['./delete-download.page.scss'],
})
export class DeleteDownloadPage implements OnInit {
  data = [];
  pageno = 1;
  pagesize = 10;
  term;
  deleteId: number; 
  singleData = {
    download_title: '',
    download_link: '',
    download_id: '',
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

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Are You Want to Delete Following ?',
      message: this.singleData.download_title,
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
              .deletedownload(this.singleData.download_id)
              .subscribe((res) => {
                this.router.navigate(['/download']);
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
      this.service.getSingleDownload(this.deleteId).subscribe((res) => {
        this.singleData = res.document;
        this.loadingController.dismiss();
        this.presentAlertConfirm();
      });
    });
  }

  getData(ev) {
    if (ev == null) {
      this.pageno = 1;
      this.pagesize = 10;
      this.presentLoading().then(() => {
        this.service
          .getAllDownloads(this.pageno, this.pagesize)
          .subscribe((data) => {
            this.data = data.document.records;
            this.loadingController.dismiss();
          });
      });
    } else {
      this.pageno++;
      this.presentLoading().then(() => {
        this.service
          .getAllDownloads(this.pageno, this.pagesize)
          .subscribe((data) => {
            this.data = this.data.concat(data.document.records);
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
}
