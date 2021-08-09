import {TabularParser} from "./tabular";
import {IParser} from "./base";

export class CoursesParser extends TabularParser<ICourse> implements IParser {
  constructor() {
    super();
    this.tableContainerSelector = "#RegisteredCourses";
  }

  getAttendance(el: HTMLElement) {
    let attendance = {};
    let divs = el.querySelectorAll("div");
    for (let i = 0; i < divs.length; i++) {
      if (divs[i].getAttribute("title"))
        attendance[divs[i].getAttribute("title")] = divs[i].getAttribute("aria-valuemax");
    }
    return attendance;
  }

  buildObj(row): ICourse {
    return {
      code: TabularParser.getNthCol(row, 1).innerText.trim(),
      name: TabularParser.getNthCol(row, 2).innerText.trim(),
      credits: TabularParser.getNthCol(row, 3).innerText.trim(),
      teacher: TabularParser.getNthCol(row, 4).innerText.trim(),
      class: TabularParser.getNthCol(row, 5).innerText.trim(),
      attendance: this.getAttendance(TabularParser.getNthCol(row, 6))
    }
  }
}

export interface ICourse {
  code: string;
  name: string;
  credits: string;
  teacher: string;
  class: string;
  attendance: { [id: string]: number }
}

export default new CoursesParser();
