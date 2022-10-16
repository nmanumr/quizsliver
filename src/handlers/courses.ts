import {IHandler} from "./base";
import {recreateNode} from "../utils";

export class CoursesPage implements IHandler {
  async handle(doc: Document) {
    let trs = document.querySelectorAll<HTMLElement>("tr[onclick]");

    for (let i = 0; i < trs.length; i++) {
      let id = trs[i]
        .getAttribute('onclick')
        .match(/\/Courses\/SetCourse\/(\d+)/)[1];

      trs[i].removeAttribute('onclick');
      recreateNode(trs[i]).addEventListener('click', () => {
        this.onCourseOpened(id, trs[i].querySelector('td').innerText.trim())
      });
    }
  }

  onCourseOpened(id: string, code: string) {
    localStorage['currentCourse'] = code;
    window.location.assign(`/Courses/SetCourse/${id}`);
  }
}

export default new CoursesPage();
