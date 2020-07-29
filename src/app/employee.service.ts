import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Employee } from './employee';
  

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseUrl = 'http://localhost:8088';  
  
  constructor(private http:HttpClient) { }  
  
  public generateToken(request) {
    return this.http.post<string>(`${this.baseUrl}`+'/authenticate', request, {  responseType: 'text' as 'json' });
  }

  public welcome(token) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(`${this.baseUrl}`+'/home', {headers, responseType: 'text' as 'json' });
  }
  
   getEmployeeList(token): Observable<any> {  
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(`${this.baseUrl}`+'/findAll',{headers,});  
  }  
  
  createEmployee(requestEntity: Object,token): Observable<Object> {  
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post(`${this.baseUrl}`+'/save', requestEntity,{headers,});  
  }  
  
  deleteEmployee(id: number,token): Observable<any> {  
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.delete(`${this.baseUrl}/delete/${id}`, {headers,});  
  }  
  
  getEmployee(id: number,token): Observable<any> {  
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(`${this.baseUrl}/findById/${id}`,{headers,});  
  }  
  
  updateEmployee(id: number,requestEntity: Object,token): Observable<Object> {  
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put(`${this.baseUrl}/update/${id}`, requestEntity,{headers,});  
  } 
  
  deactivateEmployee(id: number,token): Observable<any> {  
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.delete(`${this.baseUrl}/deactivate/${id}`, {headers, responseType: 'text' });  
  }  
  
  updatePassword(id: number,entity: Object,token): Observable<any> {  
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put(`${this.baseUrl}/updatePass/${id}`, entity,{headers,});  
  } 
}
