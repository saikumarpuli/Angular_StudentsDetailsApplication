import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
 import index from "@angular/cli/lib/cli";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }
@Input() public parentData;
  @Output() public index = new EventEmitter();

  deleteDetails(position):void{
    this.index.emit(position);

  }
  ngOnInit() {
  }

}
