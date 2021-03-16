import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MyServiceService } from '../../../shared/my-service.service';
import { ActionSheetController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  data = {
    youtube_title: '',
    youtube_videoLink: '',
  };
  datas = [];
  pageno = 1;
  pagesize = 10;
  constructor(
    public alertController: AlertController,
    private service: MyServiceService,
    private router: Router,
    public actionSheetController: ActionSheetController,
    private youtube: YoutubeVideoPlayer
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
            this.router.navigate(['/delete-video']);
          },
        },
        {
          text: 'Edit',
          icon: 'create',
          handler: () => {
            this.router.navigate(['/edit-video']);
          },
        },
        {
          text: 'View',
          icon: 'eye',
          handler: () => {
            this.router.navigate(['/view-videos']);
          },
        },

        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {},
        },
      ],
    });
    await actionSheet.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.data.youtube_title,
      message: 'Successfully Inserted ! ',
      mode: 'ios',
      buttons: ['OK'],
    });

    await alert.present();
  }

  getDatas() {
    this.service.getAllVideos(this.pageno, this.pagesize).subscribe((res) => {
      this.datas = res.document.records;
    });
  }

  addDownload(form: NgForm) {
    this.service.createVideo(this.data).subscribe((res) => {
      this.presentAlert();
      form.resetForm();
      this.getDatas();
    });
  }
  viewVideo(id) {
    this.youtube.openVideo(id);
  }
}
