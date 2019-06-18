import { Component, OnInit } from '@angular/core';
 import {JsondataService} from "../jsondata.service";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor(private jsonservice:JsondataService) { }

 public details:any;
  student = 'Students';
  Selectname(studentdata){
  this.details=studentdata;
  }
  data;
 public position;
  private i: number;
  ngOnInit() {
    this.data=this.jsonservice.getdata()
  }
  validateData(position : number){
    this.position = position;
    for(this.i=0; this.i<this.data.length; this.i++){
      if(this.data[this.i].id==this.position){
        this.data.splice(this.i,1)
      }
    }
  }

}
