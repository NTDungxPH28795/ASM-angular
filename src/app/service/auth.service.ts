import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  signup(data: any): Observable<any>{
    return this.http.post('http://localhost:3000/users', data)
  }
  signin(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', data);
  }
}
