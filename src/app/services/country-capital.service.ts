import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryCapitalService {

  constructor(
    private http: HttpClient
  ) { }

  public getCountryCapital(): Observable<Object> {
    return this.http.get('assets/json-files/country-capital.json');
  }
}
