import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestoService {
url="http://localhost:3000/restaurants"
rootUrl="http://localhost:3000/"
  constructor(private http:HttpClient) { }
  getList()
  {
   return this.http.get(this.url);
  }
  saveResto(data)
  {
   return this.http.post(this.url,data)
  } 
  deleteResto(id)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentResto(id)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updateResto(id,data)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }
  registerUser(data)
  {
    return this.http.post(this.rootUrl+"users",data)
  }
} 
