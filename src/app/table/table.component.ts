import { Component, OnInit } from '@angular/core';
import { CountryCapitalService } from '../services/country-capital.service';
import { Observable } from 'rxjs';
import { ICountryDetails } from '../models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public tables: Array<Object> = [
    {row: 1},
    {row: 2},
    {row: 3},
  ];
  public tableHeader: Array<string> = ['#', 'Country', 'Capital'];
  public inputString : Object = {
    1: { country: '', capital: ''},
    2: { country: '', capital: ''},
    3: { country: '', capital: ''},
  };
  public countryName$: Observable<ICountryDetails[]>;

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

  public addRow() {
    let lastElement;
    for(lastElement in this.inputString);
    this.inputString[+lastElement + 1] = { country: '', capital: ''};
    this.tables.push({row: +lastElement + 1})
  }

  public removeRow() {
    let lastElement;
    for(lastElement in this.inputString);
    if (lastElement == 1) return;
    delete this.inputString[+lastElement];
    this.tables.pop();
  }
}
