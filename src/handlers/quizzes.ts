import {IHandler} from "./base";
import courseDetailsParser from "../parsers/courseDetails";

export class QuizzesPage implements IHandler {
  handle(doc: Document) {
    $(".startquiz[title^='Take']").on('click', async (e) => {
      $(".se-pre-con").fadeIn("slow");
      e.preventDefault();
      // Will be used if current course is lost from session
      localStorage["CurrentCourse"] = courseDetailsParser.parse(doc).courseCode;
      window.location.assign($(e.target).attr('href'));
    })
  }
}

export default new QuizzesPage();
