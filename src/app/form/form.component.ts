import { Component, OnInit } from '@angular/core';
import { bitaservice } from '../bita.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   email;
   firstname;
   lastname;
   phoneno;

  constructor(private us:bitaservice) { }

  ngOnInit() {
  }
 addData(){
   this.us.addData(this.email,this.firstname,this.lastname,this.phoneno);
 }
}
