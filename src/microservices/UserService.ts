import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}?page=${page}`);
  }

  getUserDetails(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }
}