import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { LoadingController,  } from '@ionic/angular';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.page.html',
  styleUrls: ['./view-details.page.scss'],
})
export class ViewDetailsPage implements OnInit {
  data = {
    notices_date: '',
    notices_id: '',
    notices_title: '',
    notices_describe: '',
  };
  constructor(
    private _route: ActivatedRoute,
    private service: MyServiceService,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');

    this.presentLoading().then(() => { 
      this.service.getSingleNotice(id).subscribe((res) => {
        this.data = res.document;
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
}
