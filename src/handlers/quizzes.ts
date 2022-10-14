import {IHandler} from "./base";
import courseDetailsParser from "../parsers/courseDetails";

export class QuizzesPage implements IHandler {
  handle(doc: Document) {
    const btn = document.querySelector(".startquiz[title^='Take']");

    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      // Will be used if current course is lost from session
      localStorage["CurrentCourse"] = courseDetailsParser.parse(doc).courseCode;
      window.location.assign((e.target as HTMLElement).getAttribute('href'));
    });
  }
}

export default new QuizzesPage();
