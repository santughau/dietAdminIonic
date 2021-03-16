import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MyServiceService } from '../../../shared/my-service.service';
import { ActionSheetController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {
  data = {
    gallery_title: '',
    gallery_imgLink: '',
  };

  pageno = 1;
  pagesize = 10;
  constructor(
    public alertController: AlertController,
    private service: MyServiceService,
    private router: Router,
    public actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {}

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
            this.router.navigate(['/delete-photo']);
          },
        },
        {
          text: 'Edit',
          icon: 'create',
          handler: () => {
            this.router.navigate(['/edit-photo']);
          },
        },
        {
          text: 'View',
          icon: 'eye',
          handler: () => {
            this.router.navigate(['/view-photo']);
          },
        },

        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.data.gallery_title,
      message: 'Successfully Inserted ! ',
      mode: 'ios',
      buttons: ['OK'],
    });

    await alert.present();
  }

  addDownload(form: NgForm) {
    this.service.createGallery(this.data).subscribe((res) => {
      this.presentAlert();
      form.resetForm();
    });
  }
}
