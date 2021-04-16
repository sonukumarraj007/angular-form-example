import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private __http: HttpClient) { }

  url = "http://localhost:2021";

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // get user list
  getUserList(): Observable<any> {
    return this.__http.get<any>(this.url + '/user')
  }

  // get single user
  getSingleUser(id: string): Observable<any> {
    return this.__http.get<any>(this.url + "/user/" + id)
  }

  // create new user 
  createNewUser(data: string): Observable<any> {
    return this.__http.post<any>(this.url + '/user', JSON.stringify(data), this.httpOptions)
  }

  // update single user 
  updateSingleUser(id: string, data: string): Observable<any> {
    return this.__http.put<any>(this.url + '/user/' + id, JSON.stringify(data), this.httpOptions)
  }


}
