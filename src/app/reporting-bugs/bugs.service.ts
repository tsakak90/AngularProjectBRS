import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchCriteria } from './search-criteria';

@Injectable({
  providedIn: 'root'
})
export class BugsService {

  private readonly endpoint = 'https://bug-report-system-server.herokuapp.com/bugs?';

  constructor(private http: HttpClient) {}

  getlistofBugs(size: number, column: string, direction: string, page: number, criteria?: SearchCriteria): Observable<any> {

    let filters = '';

    if (criteria) {
      // tslint:disable-next-line: max-line-length
      filters = `title=${criteria.title || ''}&priority=${criteria.priority || ''}&reporter=${criteria.reporter || ''}&status=${criteria.status || ''}`;
    }

    // const finalendpoint = this.endpoint + 'size=' + size + '&sort=' + column + ',' + direction + '&page=' + page;
    const finalendpoint = `${this.endpoint}${filters}&size=${size}&sort=${column},${direction}&page=${page}`;
    return this.http.get(finalendpoint, {observe: 'response'});
  }

  deleteBug(id: string) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }

  getBugsAfterDelete(): Observable<any> {
    const finalendpoint = this.endpoint + "?sort=title,desc" + "&page=0";
    return this.http.get(finalendpoint);
  }

}
