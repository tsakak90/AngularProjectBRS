import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugsService {

  private readonly endpoint = 'https://bug-report-system-server.herokuapp.com/bugs?';

  constructor(private http: HttpClient) {}

  getlistofBugs(size: number, column: string, direction: string, page: number): Observable<any> {
    const finalendpoint = this.endpoint + 'size=' + size + '&sort=' + column + ',' + direction + '&page=' + page;
    return this.http.get(finalendpoint);
  }

  deleteBug(id: string) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }

  getBugsAfterDelete(): Observable<any> {
    const finalendpoint = this.endpoint + "?sort=title,desc" + "&page=0";
    return this.http.get(finalendpoint);
  }

}
