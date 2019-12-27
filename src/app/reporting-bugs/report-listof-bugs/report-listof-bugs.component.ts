import { Component, OnInit } from '@angular/core';
import { BugList } from '../bug-list';
import { FormGroup } from '@angular/forms';
import { BugsService } from '../bugs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-listof-bugs',
  templateUrl: './report-listof-bugs.component.html',
  styleUrls: ['./report-listof-bugs.component.scss']
})

export class ReportListofBugsComponent implements OnInit {

  title = 'BRSApp';
  lstbugs: BugList[];
  form: FormGroup;
  currentPage: number;
  entriesfrom: number;
  entriesto: number;
  listsize: number;
  pushNext: boolean;
  isNextDisabled: boolean = false;
  isPrevDisabled: boolean = true;

  sortdirection = {
    title: undefined,
    priority: undefined,
    reporter: undefined,
    createdAt: undefined,
    status: undefined
  };

  constructor(private bugsService: BugsService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({});
    this.currentPage = 1;
    this.listsize = 20;
    this.entriesto = 0;
    this.entriesfrom = 0;
    this.sortby('title', this.sortdirection.title);
  }

  sortby(column: string, sortedDirection: boolean) {
    let direction: string;
    if (sortedDirection === undefined || sortedDirection === false) {
      direction = 'asc';
    }
    if (sortedDirection === true) {
      direction = 'desc';
    }
    this.bugsService.getlistofBugs(this.listsize, column, direction, this.currentPage - 1).subscribe((data) => {
      console.log(data);
      this.lstbugs = data;
      if (this.entriesfrom === 0 && this.lstbugs.length > 0) {
        this.entriesfrom = 1;
        this.entriesto = this.lstbugs.length;
      }
      else {
        if (this.pushNext) {
          this.entriesfrom = this.entriesto + 1;
          this.entriesto += this.lstbugs.length;
          if (this.lstbugs.length < this.listsize){
            this.isNextDisabled = true;
          }
          this.isPrevDisabled = false;

        } else {
          this.entriesto = this.entriesfrom - 1;
          this.entriesfrom -= this.listsize;
          if (this.entriesfrom === 1) {
            this.isPrevDisabled = true;
          }
          else{
            this.isPrevDisabled = false;
          }
          this.isNextDisabled = false;
        }
      }
    });

    Object.keys(this.sortdirection).map(key => {
      if (key !== column) {
        this.sortdirection[key] = undefined;
      }
    });
    this.sortdirection[column] = !this.sortdirection[column];
  }

  previousPage() {
    this.pushNext = false;
    this.currentPage -= 1;
    this.sortby('title', this.sortdirection.title);
  }

  nextPage() {
    this.pushNext = true;
    this.currentPage += 1;
    this.sortby('title', this.sortdirection.title);
  }

  addBug(){
    this.router.navigate(['bug-inserting']);
  }
}
