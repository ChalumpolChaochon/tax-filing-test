import { Injectable } from '@angular/core';
import { MonthModel, TaxModel, YearModel } from 'src/model/tax-model';
import { monthDatalist } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor() { }

  async getMonts(): Promise<Array<MonthModel>> {
    const result = monthDatalist
    return result!;
  }

  async getYears(): Promise<YearModel[]> {
    const current = new Date 
    const year = current.getFullYear() //+ 543
    const result:YearModel[] = []
    
    for(let i = 2020; i <= year;i++){
      let year:YearModel = {
        value: i.toString(),
        label:i.toString()
      }
      result.push(year)
    }
    
    result.sort((a, b) => (b > a) ? 1 : -1)
    return result!;
  }

  get():Promise<TaxModel>{
    const taxData = localStorage.getItem('taxData')
    const res =  JSON.parse(taxData!);
    return res!
  }

  save(items:TaxModel){
    localStorage.setItem('taxData', JSON.stringify(items));
  }
}
