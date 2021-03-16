import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MyServiceService } from './../../shared/my-service.service';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {
  data = {
    download_title: '',
    download_link: '',
  };
  datas = [];
  pageno = 1;
  pagesize = 10; 
  constructor(
    public alertController: AlertController,
    private service: MyServiceService,
    private router: Router,
    public actionSheetController: ActionSheetController,
    private iab: InAppBrowser
  ) {}

  ngOnInit() {
    this.getDatas();
  }
  getDatas() {
    this.service
      .getAllDownloads(this.pageno, this.pagesize)
      .subscribe((res) => {
        this.datas = res.document.records;
      });
  }

  openBrowese(download_link) {
    const browser = this.iab.create(download_link, '_system');
    browser.show();
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
            this.router.navigate(['/delete-download']);
          },
        },
        {
          text: 'Edit',
          icon: 'create',
          handler: () => {
            this.router.navigate(['/edit-download']);
          },
        },
        {
          text: 'View',
          icon: 'eye',
          handler: () => {
            this.router.navigate(['/view-download']);
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
      header: this.data.download_title,
      message: 'Successfully Inserted ! ',
      mode: 'ios',
      buttons: ['OK'],
    });

    await alert.present();
  }

  addDownload(form: NgForm) {
    this.service.createdownload(this.data).subscribe((res) => {     
      this.presentAlert();
      form.resetForm();
      this.getDatas();
    });
  }
  ionViewDidEnter(){
    this.getDatas();
  }
}
