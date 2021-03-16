import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.page.html',
  styleUrls: ['./add-school.page.scss'],
})
export class AddSchoolPage implements OnInit {
  data = {
    schoolName: '',
    blockId: '',
    talukaId: '',
    udise: '',
  };
  taluka = [];
  blocks = [];
  talukaSelectedId = '';
  blockSelectedId = '';
  constructor(
    private route: Router,
    private service: MyServiceService,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllTaluka().subscribe((res) => {
        this.taluka = res;
        this.loadingController.dismiss();
      });
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.data.schoolName,
      message: 'is successfully Registered ',
      mode: 'ios',
      buttons: ['OK'],
    });

    await alert.present();
  }

  OnTalukaChange(event) {
    this.blocks = [];
    this.talukaSelectedId = event.target.value;
    this.data.talukaId = this.talukaSelectedId;

    this.presentLoading().then(() => {
      this.service.getBlock(this.talukaSelectedId).subscribe((data) => {
        this.blocks = data;
        this.loadingController.dismiss();
      });
    });
  }

  addSchool() {
    this.service.addSchool(this.data).subscribe((res) => {
      this.route.navigate(['/download']);
      this.presentAlert();
    });
  }
}
