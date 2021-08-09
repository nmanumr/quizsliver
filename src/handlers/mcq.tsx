import {_app$} from "../@types";
import {IHandler} from "./base";
import {h, render} from 'preact';
import {hashCode} from "../utils";
import mcqParser from "../parsers/mcq";
import mcqService from "../services/mcq";
import {ParsedMcqWithAnswer} from "../types";
import userInfoParser, {IUserInfo} from "../parsers/userInfo";
import courseDetailsParser, {ICourseDetail} from "../parsers/courseDetails";
import Loader, {LoaderState, Globals as LoaderGlobals} from "../components/Loader";

export class McqPage implements IHandler {
    private mcqFound = false;
    private mcqMarked = false;
    private course: ICourseDetail;
    private parsedMcq: ParsedMcqWithAnswer;
    private userAns: string;
    private user: IUserInfo;

    async handle(doc: Document) {
        // remove mcq number
        $(".quiz_opts b").remove();
        if (!document.getElementById("quiz_questions"))
            return;

        this.renderLoader();
        window[_app$].updateLoaderState(LoaderState.Loading, "Parsing Mcq");
        this.course = courseDetailsParser.parse(doc);
        this.parsedMcq = {
            ...mcqParser.parse(doc),
            ans: undefined,
        };
        this.user = userInfoParser.parse(doc);

        window[_app$].updateLoaderState(LoaderState.Loading, "Fetching Mcq");
        let fetchedMcq = await mcqService.searchMcq(
          this.course.courseCode || localStorage["CurrentCourse"],
          this.parsedMcq
        );
        this.mcqFound = !!fetchedMcq.exists;

        this.bindOnMcqSubmitted();
        this.bindOnOptionSelected();

        if (fetchedMcq.exists) {
            this.mcqMarked = await this.markMcq(fetchedMcq.data());
            if (this.mcqMarked) {
                window[_app$].updateLoaderState(LoaderState.Success, "Known answer marked");
            } else {
                window[_app$].updateLoaderState(LoaderState.Error, "Answer not found");
            }
            // uncomment to auto submit mcq if found
            // this.onMcqSubmit();
        } else {
            window[_app$].updateLoaderState(LoaderState.Error, "Answer not found");
        }
    }

    bindOnMcqSubmitted() {
        document.querySelector(`.submit_btn`).setAttribute('onclick', '');
        document.querySelector(`.submit_btn`).addEventListener("click", this.onMcqSubmit.bind(this));
    }

    bindOnOptionSelected() {
        const onOptionSelected = (e) => {
            if (!this.mcqFound && !this.mcqMarked)
                this.parsedMcq.ans = e.target["value"];
            this.userAns = e.target["value"];

            window[_app$].updateLoaderState(LoaderState.Success, "Answer saved");
        }

        document.querySelectorAll("[name='quiz_option']").forEach(
          el => el.addEventListener("click", onOptionSelected.bind(this))
        );
    }

    async onMcqSubmit() {
        window[_app$].updateLoaderState(LoaderState.Loading, "Submitting your Answer");
        if (!this.mcqFound)
            await mcqService.saveMcq(this.course.courseCode || localStorage["CurrentCourse"], this.parsedMcq);

        await mcqService.saveMcqToUser(
            hashCode(this.parsedMcq.text).toString(),
            this.userAns,
            this.user.rollNum,
            localStorage["currentQuiz"],
            this.course.courseCode || localStorage["CurrentCourse"]
        );
        document.forms[0].submit();
    }

    mark(id: string): boolean {
        let el: HTMLElement = document.querySelector(`[value='${id}']`)
        el && el.click();
        return !!el;
    }

    markFromText(text: string) {
        let correctId = null;
        document.querySelectorAll("[name='quiz_option']").forEach((el: HTMLElement) => {
            let id = el.getAttribute("id");
            let labelText = document.querySelector<HTMLElement>(`[for='${id}']`).innerText.trim();
            if (text == labelText) {
                correctId = el["value"];
                el.click();
            }
        });
        return correctId;
    }

    async markMcq(fetchedMcq) {
        if (fetchedMcq.ans) {
            return this.mark(fetchedMcq.ans);
        }

        if (fetchedMcq.correct) {
            let correctId = this.markFromText(fetchedMcq.correct);
            if (!correctId) return false;

            await mcqService.saveMcq(this.course.courseCode, {
                ...this.parsedMcq,
                ans: correctId
            });
            return true;
        }

        return false;
    }

    renderLoader() {
        let form = document.getElementById("quiz_questions");
        form.style.position = 'relative';
        form.appendChild(document.createElement('div'));
        render(<Loader />, form.lastElementChild);
    }
}

export default new McqPage();
