import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private path = `https://portfolio-api-c4bh.onrender.com/frontend/`
  constructor(private http: HttpClient) { }

    private globalHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }


  getRequest(token:string, endpoint: string){
    const url = `${this.path}${endpoint}`;
    const headers = this.globalHeader()
    return this.http.get(url, { headers })
  }

}
