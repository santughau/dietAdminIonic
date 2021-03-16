import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from './../../../shared/my-service.service';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';

@Component({
  selector: 'app-delete-notice',
  templateUrl: './delete-notice.page.html',
  styleUrls: ['./delete-notice.page.scss'],
})
export class DeleteNoticePage implements OnInit {
  data = [];
  pageno = 1;
  pagesize = 10;
  term;
  deleteId: number;
  singleData = {
    notices_id: '',
    notices_date: '',
    notices_title: '',
    notices_describe: '',
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
      message: this.singleData.notices_title,
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
              .deleteNotice(this.singleData.notices_id)
              .subscribe((res) => {
                this.router.navigate(['/notices']);
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
      this.service.getSingleNotice(this.deleteId).subscribe((res) => {
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
          .getAllNotices(this.pageno, this.pagesize)
          .subscribe((data) => {

            this.data = data.document.records;
            this.loadingController.dismiss();
          });
      });
    } else {
      this.pageno++;

      this.presentLoading().then(() => {
        this.service
          .getAllNotices(this.pageno, this.pagesize)
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
