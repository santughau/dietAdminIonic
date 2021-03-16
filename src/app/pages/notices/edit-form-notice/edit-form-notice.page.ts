import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-edit-form-notice',
  templateUrl: './edit-form-notice.page.html',
  styleUrls: ['./edit-form-notice.page.scss'],
})
export class EditFormNoticePage implements OnInit {
  data = {
    notices_date: '',
    notices_describe: '',
    notices_title: '',
  };
  id: number;
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
      this.service.getSingleNotice(this.id).subscribe((res) => {
        this.data = res.document;
        this.loadingController.dismiss();
      });
    });
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

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  }

  addNotice(form: NgForm) {
    this.service.updateNotice(this.data).subscribe((res) => {
      this.presentAlert();
      form.resetForm();
      this.route.navigate(['/notices']);
    });
  }
}
