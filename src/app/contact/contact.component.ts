import { Component, OnInit } from '@angular/core';
import { bitaservice } from '../bita.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  bs: any;
  arr: any;
  
  constructor() { }

  ngOnInit() {
    this.getData();
  }
 getData(){
  this.bs.getData().subscribe(data => { this.arr = data; });
 }
}
