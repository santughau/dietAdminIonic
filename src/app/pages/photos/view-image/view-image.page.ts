import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.page.html',
  styleUrls: ['./view-image.page.scss'],
})
export class ViewImagePage implements OnInit {
  id;
  
  image = {
    gallery_id: '',
    gallery_title: '',
    gallery_imgLink: '',
  };
  constructor(
    private _route: ActivatedRoute,
    private route: Router,
    private service: MyServiceService
  ) {}

  ngOnInit() {
    this.id = +this._route.snapshot.paramMap.get('id');
    this.service.getSingleImage(this.id).subscribe((res) => {
      this.image = res.document;
    });
  }

  
}
