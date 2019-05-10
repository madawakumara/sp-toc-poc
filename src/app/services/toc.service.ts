import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TocService {

  constructor(public http: HttpClient) { }

  getToc() {
    this.http.get(
      `https://myspodev2.sharepoint.com/sites/nylwiki/_api/web/lists/GetByTitle('Chapters')/Items?$select=ID,Title,TOC,Active,ChapterID`)
      .subscribe((data) => {
        console.log(data);
      }, (err) => {
        console.log(err);
      });
    
  }
}
