import { Component, OnInit } from '@angular/core';
import { BugsService } from './bugs.service';
import { FormGroup } from '@angular/forms';
import { BugList } from './bug-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'BRSApp';
  lstbugs: BugList[];
  form: FormGroup;
  reverseSort1: false;
  reverseSort2: false;
  reverseSort3: false;
  reverseSort4: false;
  reverseSort5: false;


  constructor(private bugsService: BugsService) {}

  ngOnInit() {
    this.form = new FormGroup({});
    this.sortby('title', this.reverseSort1);
  }

  sortby(column: string, sortedDirection: boolean) {
    let direction: string;
    if (!sortedDirection) {
      direction = 'asc';
    } else {
      direction = 'desc';
    }
    this.bugsService.getlistofBugs(column, direction).subscribe((data) => {
      console.log(data);
      this.lstbugs = data;
    });
  }
}
