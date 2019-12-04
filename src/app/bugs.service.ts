import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugsService {

  private readonly endpoint = 'https://bug-report-system-server.herokuapp.com/bugs?sort=';

  constructor(private http: HttpClient) {}

  getlistofBugs(column: string, direction: string): Observable<any> {
    const finalendpoint = this.endpoint + column + ',' + direction;
    return this.http.get(finalendpoint);
  }

}
