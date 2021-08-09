import {hashCode} from "../utils";
import {WrongMcq} from "../types";

import dbService from './database';

export class McqService {
  public searchMcq(courseId: string, mcq) {
    let hash = hashCode(mcq.text);
    return dbService.getMcq(courseId, hash);
  }

  public saveMcq(courseId: string, mcq) {
    let hash = hashCode(mcq.text);
    return dbService.setMcq(courseId, hash, mcq);
  }

  public async updateMcq(courseId: string, mcq: WrongMcq): Promise<void> {
    let question = await this.searchMcq(courseId, mcq);

    if (!question || !question.data()) {
      await this.saveMcq(courseId, {
        text: mcq.text,
        correct: mcq.correct,
      });
      return;
    }

    let ans;
    for (let choice in question.data().opts)
      if (choice == mcq.correct)
        ans = question.data().opts[choice];

    if (ans)
      await dbService.updateMcqAns(question.ref, {ans: ans});
    else
      await dbService.updateMcqAns(question.ref, {correct: mcq.correct});
  }

  public saveMcqToUser(mcqId: string, ansId: string, rollNum: string, quizId: string, courseId: string) {
    return dbService.saveMcqToUser(mcqId, ansId, rollNum, quizId, courseId);
  }

  public getUserQuiz(rollNum: string, courseId: string, quizId: string) {
    return dbService.getUserQuiz(rollNum, courseId, quizId);
  }
}

export default new McqService();
