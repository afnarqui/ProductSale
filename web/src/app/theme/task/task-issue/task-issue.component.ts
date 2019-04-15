import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
declare const $: any;

export class TaskIssue {
  type: string;
  id: number;
  description: string;
  date: any;
  priority: string;
  assigned: string;
  status: string;
}

@Component({
  selector: 'app-task-issue',
  templateUrl: './task-issue.component.html',
  styleUrls: [
    './task-issue.component.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class TaskIssueComponent implements OnInit {
  @ViewChild('issueText1') issueText1: any;
  @ViewChild('issueBar1') issueBar1: any;

  public data: Observable<TaskIssue>;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public httpClient: HttpClient) {
  }

  ngOnInit() {
    this.data = this.httpClient.get<TaskIssue>(`assets/data/issue-list.json`);

    let progression1 = 0;
    const progress = setInterval(() => {
      const commonEle = this.issueText1.nativeElement;
      const commonEle1 = this.issueBar1.nativeElement;

      commonEle.innerHTML = progression1 + '%';
      const element_style = 'left:' + progression1 + '%;' + 'top: -20px;';
      commonEle.setAttribute('style', element_style);
      const element_style1 = 'width:' + progression1 + '%;';
      commonEle1.setAttribute('style', element_style1);
      if (progression1 === 70) {
        clearInterval(progress);
      } else {
        progression1 += 1;
      }

    }, 100);
  }

}
