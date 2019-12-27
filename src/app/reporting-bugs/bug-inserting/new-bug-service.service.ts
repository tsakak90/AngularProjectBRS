import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewBugService {

  private readonly endpoint = 'https://bug-report-system-server.herokuapp.com/bugs?';

  constructor(private http: HttpClient) {}

  //newBug(customer: Customer): Observable<any> {    return this.http.post(this.endpoint, customer);  }
  
}
