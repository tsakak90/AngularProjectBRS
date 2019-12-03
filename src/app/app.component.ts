import { Component, OnInit } from '@angular/core';
import { BugsService } from './bugs.service';
import { Observable } from 'rxjs';

interface BugList {
  title: string;
  priority: string;
  reporter: string;
  creationDate: Date;
  status: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BRSApp';
  lstbugs: BugList[];

  constructor(private bugsService: BugsService) {}

  ngOnInit() {
    this.bugsService.getlistofBugs().subscribe((data) => {
      console.log(data);
      this.lstbugs = data;
    });
  }

}
