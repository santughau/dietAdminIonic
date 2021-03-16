import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  url = 'https://bpegm.in/tejali/';
  constructor(private http: HttpClient) {}

  getAllDownloads(pageno, pagesize): Observable<any> {
    return this.http.get(
      this.url + 'download/read.php?pageno=' + pageno + '&pagesize=' + pagesize
    );
  }

  createdownload(data): Observable<any> {
    return this.http.post(this.url + 'download/create.php', data);
  }

  getSingleDownload(id): Observable<any> {
    return this.http.get(this.url + 'download/read_one.php?id=' + id);
  }

  updatedownload(data): Observable<any> {
    return this.http.post(this.url + 'download/update.php', data);
  }
  deletedownload(id): Observable<any> {
    return this.http.post(this.url + 'download/delete.php', {
      download_id: id,
    });
  }

  getAllNotices(pageno, pagesize): Observable<any> {
    return this.http.get(
      this.url + 'notices/read.php?pageno=' + pageno + '&pagesize=' + pagesize
    );
  }

  createNotice(data): Observable<any> {
    return this.http.post(this.url + 'notices/create.php', data);
  }

  getSingleNotice(id): Observable<any> {
    return this.http.get(this.url + 'notices/read_one.php?id=' + id);
  }

  updateNotice(data): Observable<any> {
    return this.http.post(this.url + 'notices/update.php', data);
  }
  deleteNotice(id): Observable<any> {
    return this.http.post(this.url + 'notices/delete.php', {
      notices_id: id,
    });
  }

  getAllImages(pageno, pagesize): Observable<any> {
    return this.http.get(
      this.url + 'gallery/read.php?pageno=' + pageno + '&pagesize=' + pagesize
    );
  }

  getSingleImage(id): Observable<any> {
    return this.http.get(this.url + 'gallery/read_one.php?id=' + id);
  }

  createGallery(data): Observable<any> {
    return this.http.post(this.url + 'gallery/create.php', data);
  }

  updateGallery(data): Observable<any> {
    return this.http.post(this.url + 'gallery/update.php', data);
  }
  deleteGallery(id): Observable<any> {
    return this.http.post(this.url + 'gallery/delete.php', {
      gallery_id: id,
    });
  }

  getAllVideos(pageno, pagesize): Observable<any> {
    return this.http.get(
      this.url + 'youtube/read.php?pageno=' + pageno + '&pagesize=' + pagesize
    );
  }

  createVideo(data): Observable<any> {
    return this.http.post(this.url + 'youtube/create.php', data);
  }

  getSingleVideoe(id): Observable<any> {
    return this.http.get(this.url + 'youtube/read_one.php?id=' + id);
  }
  updateVideo(data): Observable<any> {
    return this.http.post(this.url + 'youtube/update.php', data);
  }

  deleteVideo(id): Observable<any> {
    return this.http.post(this.url + 'youtube/delete.php', {
      youtube_id: id,
    });
  }

  getAllTaluka(): Observable<any> {
    return this.http.get(this.url + 'getTaluka.php');
  }

  getBlock(id): Observable<any> {
    //return this.http.post(this.url + "getBlocks.php", { id: id });
    return this.http.get(this.url + 'getBlocks.php?talukaId=' + id);
  }

  getSchoolList(id): Observable<any> {
    return this.http.get(this.url + 'getSchoolName.php?blockId=' + id);
  }

  getSingleSchool(id): Observable<any> {
    return this.http.get(this.url + 'getSingleSchool.php?schoolId=' + id);
  }

  updateSingleSchool(data): Observable<any> {
    return this.http.post(this.url + 'updateSchool.php', data);
  }

  addSchool(data): Observable<any> {
    return this.http.post(this.url + 'addSchool.php', data);
  }

  deleteSchool(id): Observable<any> {
    return this.http.post(this.url + 'deleteSchool.php', {
      id: id,
    });
  }

  getUserList(id): Observable<any> {
    return this.http.get(this.url + 'getUserList.php?blockId=' + id);
  }

  getTotalUser(): Observable<any> {
    return this.http.get(this.url + 'totalUsers.php');
  }
}
