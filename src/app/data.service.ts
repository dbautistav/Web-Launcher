import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  fetchBoardConfig() {
    const configUrl = './assets/config.json';
    return this.http.get(configUrl).toPromise();
  }
}
