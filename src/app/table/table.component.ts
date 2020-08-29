import { Component, OnInit } from '@angular/core';
import { CountryCapitalService } from '../services/country-capital.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public tables: Array<any> = [
    {row: 1},
    {row: 2},
    {row: 3},
  ];
  public countryData: Array<string> = ['India', 'Australia', 'Japan', 'USA'];
  public inputString : any = {
    1: { country: '', capital: ''},
    2: { country: '', capital: ''},
    3: { country: '', capital: ''},
  };
  public countryName$: Observable<any>;

  constructor(
    private countryCapitalService: CountryCapitalService
  ) { }

  ngOnInit() {
    this.countryName$ = this.countryCapitalService.getCountryCapital();
  }

  public selectedCountry(country: string, index: number) {
    this.countryName$.subscribe(observer => {
      this.inputString[index].capital = observer.filter(dataValues => {
        return dataValues.country === country;
      })[0].capital;
    });
  }

  public selectedCapital(capital: string, index: number) {
    this.countryName$.subscribe(observer => {
      this.inputString[index].country = observer.filter(dataValues => {
        return dataValues.capital === capital;
      })[0].country;
    });
  }
}
