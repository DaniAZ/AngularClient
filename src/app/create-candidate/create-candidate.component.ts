import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Schedule, ScheduleList} from '../model/schedule';
import {CandidateService} from '../service/candidateService';


@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {

  nameControl = new FormControl();
  projectControl = new FormControl();
  yearControl = new FormControl();
  skillsControl = new FormControl();
  skillSets = new FormControl();
  schedule: Schedule = new Schedule();
  scheduleList: ScheduleList;
  displayedColumns: string[] = ['name', 'project', 'year', 'skills'];
  dataSource: Schedule[];



  constructor(private candidateService: CandidateService) {

  }

  ngOnInit() {
  }



    buildSchedule(){
    this.candidateService.getCandidates(this.skillSets.value.split(','))
      .subscribe(data => {
          this.scheduleList = data;
          this.dataSource = this.scheduleList.schedules;
          console.dir(data);
      // tslint:disable-next-line:semicolon
      })
  }


}
