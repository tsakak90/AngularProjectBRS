import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NewBugService } from './new-bug-service.service';

@Component({
  selector: 'app-bug-inserting',
  templateUrl: './bug-inserting.component.html',
  styleUrls: ['./bug-inserting.component.scss']
})
export class BugInsertingComponent implements OnInit {
  form: FormGroup;

  constructor(private newBugService: NewBugService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeFormState();
  }
  initializeFormState() {
    this.form = this.formBuilder.group(
      {
        title: ['', Validators.required],
        priority: [null, Validators.required],
        reporter: ['', Validators.required],
        description: ['', Validators.required],
        status: ['', Validators.required]
      }
    )
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    else {
    this.newBugService.newBug(this.form.value).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}

  back() {
    this.router.navigate(['']);
  }
}
