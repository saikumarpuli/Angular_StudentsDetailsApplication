import { Component, OnInit } from '@angular/core';
import {JsondataService} from "../jsondata.service";

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  constructor(private dataservice:JsondataService) { }
  data;

  public details:any;
   ngOnInit() {
    this.data=this.dataservice.getdata();
  }

}
