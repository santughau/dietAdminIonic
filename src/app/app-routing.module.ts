import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  hasCustomClaim,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['download']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'download',
    pathMatch: 'full',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems },
  },

  {
    path: 'download',
    loadChildren: () =>
      import('./pages/download/download.module').then(
        (m) => m.DownloadPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'view-download',
    loadChildren: () =>
      import('./pages/view-download/view-download.module').then(
        (m) => m.ViewDownloadPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'edit-download',
    loadChildren: () =>
      import('./pages/edit-download/edit-download.module').then(
        (m) => m.EditDownloadPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'edit-form-download/:id',
    loadChildren: () =>
      import('./pages/edit-form-download/edit-form-download.module').then(
        (m) => m.EditFormDownloadPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'delete-download',
    loadChildren: () =>
      import('./pages/delete-download/delete-download.module').then(
        (m) => m.DeleteDownloadPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'notices',
    loadChildren: () =>
      import('./pages/notices/notices/notices.module').then(
        (m) => m.NoticesPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'view-notice',
    loadChildren: () =>
      import('./pages/notices/view-notice/view-notice.module').then(
        (m) => m.ViewNoticePageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'edit-notice',
    loadChildren: () =>
      import('./pages/notices/edit-notice/edit-notice.module').then(
        (m) => m.EditNoticePageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'edit-form-notice/:id',
    loadChildren: () =>
      import('./pages/notices/edit-form-notice/edit-form-notice.module').then(
        (m) => m.EditFormNoticePageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'delete-notice',
    loadChildren: () =>
      import('./pages/notices/delete-notice/delete-notice.module').then(
        (m) => m.DeleteNoticePageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'photo',
    loadChildren: () =>
      import('./pages/photos/photo/photo.module').then(
        (m) => m.PhotoPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'view-photo',
    loadChildren: () =>
      import('./pages/photos/view-photo/view-photo.module').then(
        (m) => m.ViewPhotoPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'edit-photo',
    loadChildren: () =>
      import('./pages/photos/edit-photo/edit-photo.module').then(
        (m) => m.EditPhotoPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'edit-form-photo/:id',
    loadChildren: () =>
      import('./pages/photos/edit-form-photo/edit-form-photo.module').then(
        (m) => m.EditFormPhotoPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'delete-photo',
    loadChildren: () =>
      import('./pages/photos/delete-photo/delete-photo.module').then(
        (m) => m.DeletePhotoPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'video',
    loadChildren: () =>
      import('./pages/videos/video/video.module').then(
        (m) => m.VideoPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'view-videos',
    loadChildren: () =>
      import('./pages/videos/view-videos/view-videos.module').then(
        (m) => m.ViewVideosPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'edit-video',
    loadChildren: () =>
      import('./pages/videos/edit-video/edit-video.module').then(
        (m) => m.EditVideoPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'edit-form-video/:id',
    loadChildren: () =>
      import('./pages/videos/edit-form-video/edit-form-video.module').then(
        (m) => m.EditFormVideoPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'delete-video',
    loadChildren: () =>
      import('./pages/videos/delete-video/delete-video.module').then(
        (m) => m.DeleteVideoPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'view-details/:id',
    loadChildren: () =>
      import('./pages/notices/view-details/view-details.module').then(
        (m) => m.ViewDetailsPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'view-image/:id',
    loadChildren: () =>
      import('./pages/photos/view-image/view-image.module').then(
        (m) => m.ViewImagePageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'school-list',
    loadChildren: () =>
      import('./pages/school-list/school-list.module').then(
        (m) => m.SchoolListPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'edit-school/:id',
    loadChildren: () => import('./pages/edit-school/edit-school.module').then( m => m.EditSchoolPageModule)
  },
  {
    path: 'add-school',
    loadChildren: () => import('./pages/add-school/add-school.module').then( m => m.AddSchoolPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
