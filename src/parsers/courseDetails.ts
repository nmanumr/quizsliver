import {IParser} from "./base";

export class CourseDetailsParser implements IParser {
  parse(doc: Document): ICourseDetail {
    if (!document.querySelector(".page_title_container"))
      return {tile: null, teacher: null, creditHours: null, courseCode: null}

    return {
      tile: document.querySelector<HTMLElement>(".page_title_container>h3").innerText,
      teacher: document.querySelector<HTMLElement>(".page_title_container>h5:last-of-type").innerText.split(":")[1].trim(),
      creditHours: document.querySelector<HTMLElement>(".page_title_container>h5").innerText.split(":")[2].trim(),
      courseCode: document.querySelector<HTMLElement>(".page_title_container>h5").innerText.match(/\w{3}\d{3}/)[0] || localStorage["CurrentCourse"]
    }
  }
}

export interface ICourseDetail {
  teacher: string;
  tile: string;
  courseCode: string;
  creditHours: string;
}

export default new CourseDetailsParser();
