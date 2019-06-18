import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsondataService {

  constructor() { }
  getdata(){
   return  [
        {
          id: '01',
          name: 'sai',
          phone: '123456',
          age: '24'
        },
        {
          id: '02',
          name: 'kumar',
          phone: '234567',
          age: '23'
        },
        {
          id: '03',
          name: 'puli',
          phone: '345678',
          age: '25'
        },
        {
          id: '04',
          name: 'sri',
          phone: '456789',
          age: '26'
        },
        {
          id: '05',
          name: 'dev',
          phone: '456758',
          age: '22'
        }
      ]
    };
}
