import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  constructor() { }
  data = {
    student: [
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
        age: '22'
      }
    ]
  };
  public details:any;
  student = 'Students';


  p
  ngOnInit() {
  }

}
