import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BugList } from '../bug-list';

@Injectable({
  providedIn: 'root'
})
export class NewBugService {

  private readonly endpoint = 'https://bug-report-system-server.herokuapp.com/bugs?';

  constructor(private http: HttpClient) {}

  newBug(bug: BugList): Observable<any> {
        return this.http.post(this.endpoint, bug );
        }

  getBug(id: string): Observable<any> {
          return this.http.get(`${this.endpoint}/${id}`)
        }

  editBug(id: string, bug: BugList) {
        return this.http.put(`${this.endpoint}/${id}`, bug);
        }
}
