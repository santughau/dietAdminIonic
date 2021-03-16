import { Component } from '@angular/core'; 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Download', url: '/download', icon: 'cloud-download' },
    { title: 'Notices', url: '/notices', icon: 'newspaper' },
    { title: 'Videos', url: '/video', icon: 'videocam' },
    { title: 'School List', url: '/school-list', icon: 'list' },
    { title: 'Users', url: '/user-profile', icon: 'person' },
  ];

  constructor() {}
}
