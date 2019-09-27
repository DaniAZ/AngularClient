export class Schedule {
  awayTeam: string;
  matchDate: string;
  homeTeam: number;

  constructor(){}
}

export interface ScheduleList {

  schedules: Schedule[];
}
