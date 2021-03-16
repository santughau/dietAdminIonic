import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MyServiceService } from './../../../shared/my-service.service';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-notices',
  templateUrl: './notices.page.html',
  styleUrls: ['./notices.page.scss'],
})
export class NoticesPage implements OnInit {
  data = {
    notices_title: '',
    notices_describe: '',
  };
  datas = [];
  pageno = 1;
  pagesize = 10;
  constructor(
    public alertController: AlertController,
    private service: MyServiceService,
    private router: Router,
    public actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.getDatas();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Perform Action On Download',
      cssClass: 'my-custom-class',
      mode: 'ios',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',

          handler: () => {
            this.router.navigate(['/delete-notice']);
          },
        },
        {
          text: 'Edit',
          icon: 'create',
          handler: () => {
            this.router.navigate(['/edit-notice']);
          },
        },
        {
          text: 'View',
          icon: 'eye',
          handler: () => {
            this.router.navigate(['/view-notice']);
          },
        },

        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.data.notices_title,
      message: 'Successfully Inserted ! ',
      mode: 'ios',
      buttons: ['OK'],
    });

    await alert.present();
  }

  addDownload(form: NgForm) {
    this.service.createNotice(this.data).subscribe((res) => {
      this.presentAlert();
      form.resetForm();
      this.getDatas();
    });
  }

  getDatas() {
    this.service.getAllNotices(this.pageno, this.pagesize).subscribe((res) => {
      this.datas = res.document.records;
    });
  }

  ionViewDidEnter() {
    this.getDatas();
  }

  viewDetails(id) {
    this.router.navigate(['/view-details', id]);
  }
}
