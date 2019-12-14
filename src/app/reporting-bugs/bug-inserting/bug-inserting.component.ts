import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewBugService } from './new-bug-service.service';


@Component({
  selector: 'app-bug-inserting',
  templateUrl: './bug-inserting.component.html',
  styleUrls: ['./bug-inserting.component.scss']
})
export class BugInsertingComponent implements OnInit {
  form: FormGroup;

  constructor(private newBugService: NewBugService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl()
    });

  }

  submit() {
    this.router.navigate(['']);
  }

  back() {
    this.router.navigate(['']);
  }
}
