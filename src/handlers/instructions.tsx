import {_app$} from "../@types";
import {IHandler} from "./base";
import {h, render} from 'preact';
import {getQueryParam} from "../utils";
import updateService from "../services/update";
import UpdateModal from '../components/UpdateModal';
import Loader, {LoaderState} from "../components/Loader";


export class InstructionsPage implements IHandler {
  private loading = true;

  async handle(doc: Document) {
    this.renderLoader();

    let quizBtn = document.querySelector(".start_quiz_btn");
    quizBtn.removeAttribute('href');
    quizBtn.addEventListener('click', this.onQuizStart.bind(this));

    localStorage["currentQuiz"] = getQueryParam("QuizId");

    window[_app$].updateLoaderState(LoaderState.Loading, "Checking for version info");
    let newVersion = await updateService.checkForUpdate();
    if (newVersion) {
      window[_app$].updateLoaderState(LoaderState.Error, "Update required");
      setTimeout(() => {
        this.renderUpdateModel(newVersion)
      }, 0);
    } else {
      window[_app$].updateLoaderState(LoaderState.Success, "Ready to start quiz");
    }
    this.loading = false
  }

  onQuizStart() {
    if (this.loading) {
      window[_app$].updateLoaderState(LoaderState.Loading, "Please wait while extension is loading data");
      setTimeout(this.onQuizStart.bind(this), 500);
    } else {
      window[_app$].updateLoaderState(LoaderState.Loading, "Starting quiz");
      window.location.assign("/Quizzes/PopulateSingleQuiz");
    }
  }

  renderLoader() {
    let div = document.getElementsByClassName("content_area")[0] as HTMLElement;
    div.style.position = 'relative';
    div.appendChild(document.createElement('div'));
    render(<Loader/>, div.lastElementChild);
  }

  renderUpdateModel(version: string) {
    document.body.style.overflow = 'hidden';
    document.body.appendChild(document.createElement('div'));

    const container = document.querySelector('.container') as HTMLElement;
    container.style.filter = 'blur(4px)';
    render(<UpdateModal version={version}/>, document.body.lastElementChild);
  }
}

export default new InstructionsPage();
