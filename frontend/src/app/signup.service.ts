import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http:HttpClient) { }
  apiUrl = environment.apiUrl

  create(data:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/adduser`,data)
  }
  getData(): Observable<any>{
    return this.http.get(`${this.apiUrl}/getuser`)
  }
  updateUser(data:any,id:any): Observable<any>{
    return this.http.put(`${this.apiUrl}/updateuser/${id}`,data)
  }
  deleteUser(id:any): Observable<any>{
    return this.http.delete(`${this.apiUrl}/deleteuser/${id}`)
  }
}
