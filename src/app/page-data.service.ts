// src/app/page-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageDataService {
  private jsonUrl = 'assets/pages.json'; // Path to your JSON file

  constructor(private http: HttpClient) {}

  getPages(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
