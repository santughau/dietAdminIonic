import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-edit-form-photo',
  templateUrl: './edit-form-photo.page.html',
  styleUrls: ['./edit-form-photo.page.scss'],
})
export class EditFormPhotoPage implements OnInit {
  id: number;
  data = {
    gallery_id: '',
    gallery_title: '',
    gallery_imgLink: '',
  };
  constructor(
    private _route: ActivatedRoute,
    private route: Router,
    private service: MyServiceService,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.id = +this._route.snapshot.paramMap.get('id');
    this.presentLoading().then(() => {
      this.service.getSingleImage(this.id).subscribe((res) => {
        this.data = res.document;
        this.loadingController.dismiss();
      });
    });
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

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  }

  addDownload(form: NgForm) {
    this.service.updateGallery(this.data).subscribe((res) => {
      this.presentAlert();
      form.resetForm();
      this.route.navigate(['/photo']);
    });
  }
}
