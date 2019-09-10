import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { bitaservice } from '../bita.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  obj: any;
  email;
  firstname;
  lastname;
  phoneno;
  updateId: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private us: bitaservice) {
    this.updateId = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.obj = this.us.editData(this.updateId);
  }

  up_data() {
    // this.updateId=this.updateId.substr(1);
    this.route.params.subscribe(params => {
      this.us.up_data(this.email, this.firstname, this.lastname, this.phoneno, this.updateId);
      this.router.navigate(['middle-get']);
    });


  }
}
