import { Component, OnInit } from '@angular/core';
import { BugList } from '../bug-list';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BugsService } from '../bugs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-listof-bugs',
  templateUrl: './report-listof-bugs.component.html',
  styleUrls: ['./report-listof-bugs.component.scss']
})

export class ReportListofBugsComponent implements OnInit {

  constructor(private bugsService: BugsService, private router: Router) { }

  title = 'BRSApp';
  lstbugs: BugList[];
  form: FormGroup;
  currentPage: number;
  entriesfrom: number;
  entriesto: number;
  listsize: number;
  totalrecords: number;

  pushNext: boolean;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;

  sortdirection = this.initDirection();

  private initDirection() {
    return {
      title: undefined,
      priority: undefined,
      reporter: undefined,
      createdAt: undefined,
      status: undefined
    };
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(),
      reporter: new FormControl(),
      priority: new FormControl(),
      status: new FormControl(),
    });

    this.initializeWindow();
    this.listsize = 20;
    this.retrieveBugs('title', this.sortdirection.title);
  }

  initializeWindow() {
    this.currentPage = 1;
    this.entriesto = 0;
    this.entriesfrom = 0;
    this.totalrecords = 0;
    this.isNextDisabled = false;
    this.isPrevDisabled = true;
  }

  sortby(column: string, sortedDirection: boolean) {
    this.initializeWindow();
    this.retrieveBugs(column, sortedDirection);
  }


  retrieveBugs(column: string, sortedDirection: boolean) {
    let direction: string;
    direction = sortedDirection ? 'desc' : 'asc';
    const searchCriteria = this.form.value;

    this.bugsService.getlistofBugs(this.listsize, column, direction, this.currentPage - 1, searchCriteria).subscribe(data => {
      this.lstbugs = data.body;
      this.totalrecords = data.headers.get('Totalrecords');
      this.trackEntries();
    });

    Object.keys(this.sortdirection).map(key => {
      if (key !== column) {
        this.sortdirection[key] = undefined;
      }
    });
    this.sortdirection[column] = !this.sortdirection[column];
  }


  trackEntries() {
      if (this.entriesfrom === 0 && this.lstbugs.length > 0) {
        this.entriesfrom = 1;
        this.entriesto = this.lstbugs.length;
      } else {
      if (this.pushNext) {
        this.entriesfrom = this.entriesto + 1;
        this.entriesto += this.lstbugs.length;
        if (this.lstbugs.length < this.listsize) {
          this.isNextDisabled = true;
        }
        this.isPrevDisabled = false;

      } else {
        this.entriesto = this.entriesfrom - 1;
        this.entriesfrom -= this.listsize;
        if (this.entriesfrom === 1) {
          this.isPrevDisabled = true;
        } else {
          this.isPrevDisabled = false;
        }
        this.isNextDisabled = false;
        }
      }
  }

  previousPage() {
    this.pushNext = false;
    this.currentPage -= 1;
    this.retrieveBugs('title', this.sortdirection.title);
  }

  nextPage() {
    this.pushNext = true;
    this.currentPage += 1;
    this.retrieveBugs('title', this.sortdirection.title);
  }

  addBug() {
    this.router.navigate(['bug-inserting']);
  }

  search() {
    this.sortdirection = this.initDirection();
    this.sortby('title', undefined);
  }

}
