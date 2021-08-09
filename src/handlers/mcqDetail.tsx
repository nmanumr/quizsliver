import {IHandler} from "./base";
import {h, render} from "preact";
import {getQueryParam} from "../utils";
import mcqService from "../services/mcq";
import UserMcqs from '../components/UserMcqs';
import quizDetailParser from "../parsers/mcqDetails";
import userInfoParser, {IUserInfo} from "../parsers/userInfo";
import courseDetailsParser, {ICourseDetail} from "../parsers/courseDetails";

export class McqDetailPage implements IHandler {
    private course: ICourseDetail;
    private userInfo: IUserInfo;
    private quizId: string;

    async handle(doc: Document) {
        this.course = courseDetailsParser.parse(doc);
        this.userInfo = userInfoParser.parse(doc);

        for (const mcq of quizDetailParser.parse(doc)) {
            await mcqService.updateMcq(this.course.courseCode, mcq);
        }

        this.quizId = getQueryParam("QuizId");
        let userMcqs = await mcqService.getUserQuiz(this.userInfo.rollNum, this.course.courseCode, this.quizId);
        await this.renderUserMcq(userMcqs.data(), this.course.courseCode);
    }

    async renderUserMcq(mcqs, courseId) {
        let mainContent = document.getElementById("QuizSummaryMain");
        mainContent.innerHTML += "<div></div>";
        render(<UserMcqs mcqs={mcqs} courseId={courseId} />, mainContent.lastElementChild);
    }
}

export default new McqDetailPage();
