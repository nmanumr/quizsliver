import instructionsPage from "./handlers/instructions";
import mcqPage from "./handlers/mcq";
import mcqDetailPage from "./handlers/mcqDetail";
import quizzesPage from "./handlers/quizzes";
import coursesPage from "./handlers/courses";
import {IHandler} from "./handlers/base";

let handlers: Record<string, IHandler> = {
  "^\/Quizzes\/Instructions$": instructionsPage,
  "PopulateSingleQuiz": mcqPage,
  "GetAttemptedQuizDetails": mcqDetailPage,
  "^\/Quizzes\/?(Index)?\/?$": quizzesPage,
  "^\/Courses\/?(Index\/?)?$": coursesPage
};

for (let handler in handlers) {
  let re = new RegExp(handler, "i");

  if (re.exec(window.location.pathname)) {
    handlers[handler].handle(document);
  }
}
