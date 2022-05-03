import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  sendSides(sides: any) {
    return this.http.post(this.rootURL + '/triangle', {sides});
  }

}