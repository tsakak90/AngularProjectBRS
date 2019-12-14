import { Component, OnInit } from '@angular/core';
import { BugList } from '../bug-list';
import { FormGroup } from '@angular/forms';
import { BugsService } from '../bugs.service';

@Component({
  selector: 'app-report-listof-bugs',
  templateUrl: './report-listof-bugs.component.html',
  styleUrls: ['./report-listof-bugs.component.scss']
})
export class ReportListofBugsComponent implements OnInit {
  title = 'BRSApp';
  lstbugs: BugList[];
  form: FormGroup;

  sortdirection = {
    title: false,
    priority: false,
    reporter: false,
    createdAt: false,
    status: false
  }

  constructor(private bugsService: BugsService) {}

  ngOnInit() {
    this.form = new FormGroup({});
    this.sortby('title', this.sortdirection.title);
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
    this.sortdirection[column] = !this.sortdirection[column];
  }

}
