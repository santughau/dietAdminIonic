import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MyServiceService } from './../../shared/my-service.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.page.html',
  styleUrls: ['./school-list.page.scss'],
})
export class SchoolListPage implements OnInit {
  taluka = [];
  blocks = [];
  talukaId = '';
  blockId = '';
  schoolList = [];
  term;
  constructor(
    private service: MyServiceService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllTaluka().subscribe((res) => {
        this.taluka = res;
        this.loadingController.dismiss();
      });
    });
  }
  async presentAlert(title, message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      message: message,
      buttons: ['OK'],
      mode: 'ios',
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
    this.talukaId = event.target.value;

    this.presentLoading().then(() => {
      this.service.getBlock(this.talukaId).subscribe((data) => {
        this.blocks = data;
        this.loadingController.dismiss();
      });
    });
  }

  OnBlockChange(ev) {
    this.blockId = ev.target.value;
    this.presentLoading().then(() => {
      this.service.getSchoolList(this.blockId).subscribe((data) => {
        this.schoolList = data;
        this.loadingController.dismiss();
      });
    });
  }

  editSchool(id) {
    
    this.router.navigate(['/edit-school', id]);
  }

  deleteSchool(id) {
    this.service.deleteSchool(id).subscribe((response) => {      
      this.router.navigate(['/download']);
      this.presentAlert("Deleted Successfully","Thank You")
    })
  }

  goToAddSchool() {
     this.router.navigate(['/add-school']);
  }
}
