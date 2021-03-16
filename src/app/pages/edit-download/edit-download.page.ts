import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from './../../shared/my-service.service';
import { LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-edit-download',
  templateUrl: './edit-download.page.html',
  styleUrls: ['./edit-download.page.scss'],
})
export class EditDownloadPage implements OnInit {
  data = [];
  pageno = 1;
  pagesize = 10;
  term;
  constructor(
    private _router: Router,
    private service: MyServiceService,
    public loadingController: LoadingController,
    public toastController: ToastController
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

  editForm(a) {
    this._router.navigate(['/edit-form-download', a]);
  }
}
