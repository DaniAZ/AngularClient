import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Schedule, ScheduleList} from '../model/schedule';

@Injectable({ providedIn: 'root'})
export class CandidateService {
  private baseUri = '//localhost:8080/api/nfl';

  private  getUri = this.baseUri + '/createschedule';

  constructor(private http: HttpClient) {}



  getCandidates(skills: string[]): Observable<ScheduleList> {
    return this.http.post<ScheduleList>(this.getUri, skills);
  }
}
