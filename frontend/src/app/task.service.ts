import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl = environment.apiUrl

  constructor(private http:HttpClient) { }

  getSingleData(): Observable<any>{
    return this.http.get(`${this.apiUrl}/singledata`)
  }
  getUserListAccToRole(roleId:Number): Observable<any>{
    return this.http.get(`${this.apiUrl}/getuserlistacctorole/${roleId}`)
  }
  createTask(data:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/createtask`,data)
  }
  getTaskListAccToRole(data:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/gettask`,data)
  }
  updateTask(data:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/updatetask`,data)
  }
  deleteTask(taskId:any): Observable<any>{
    return this.http.delete(`${this.apiUrl}/deletetask/${taskId}`)
  }
}

