import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-edit-school',
  templateUrl: './edit-school.page.html',
  styleUrls: ['./edit-school.page.scss'],
})
export class EditSchoolPage implements OnInit {
  id: number;
  data = {
    schoolName: '',
    blockId: '',
    blockName: '',
    schoolIndexId: '',
    sname: '',
    talukaId: '',
    talukaName: '',
    udise: '',
  };
  taluka = [];
  blocks = [];
  talukaSelectedId = '';
  blockSelectedId = '';
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
      this.service.getSingleSchool(this.id).subscribe((res) => {
        this.data = res;
        console.log(res);

        this.loadingController.dismiss();
      });
    });

    this.service.getAllTaluka().subscribe((res) => {
      this.taluka = res;
      //this.loadingController.dismiss();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.data.schoolName,
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

  updateSchool(form) {
    console.log(this.data);
    this.service.updateSingleSchool(this.data).subscribe((res) => {
      this.route.navigate(['/download']);
    });
  }
}
