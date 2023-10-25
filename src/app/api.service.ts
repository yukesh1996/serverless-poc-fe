import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://j5zqxxb7wf.execute-api.us-east-2.amazonaws.com/dev';

  constructor(private http: HttpClient) { }

  scraper(website: string): Observable<any> {
    const requestBody = { website: website };
    return this.http.post(`${this.apiUrl}/scraper`, requestBody);
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/product`);
  }
}
