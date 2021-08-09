import {doc, setDoc, getDoc, DocumentReference} from "firebase/firestore/lite";
import {db} from '../firebase';

import {DbMcq} from "../types";

export class DatabaseService {
  private normalizeRollNum(rollNum: string): string {
    return rollNum.replace(/\//g, "-")
  }

  public getMcq(courseId, mcqId) {
    return getDoc(doc(db, `/subjects/${courseId}/mcqs/${mcqId}`));
  }

  public setMcq(courseId, mcqId, mcq: DbMcq) {
    return setDoc(doc(db, `/subjects/${courseId}/mcqs/${mcqId}`), mcq);
  }

  public updateMcqAns(ref: DocumentReference, data: { ans: string } | { correct: string }) {
    return setDoc(ref, data, {merge: true});
  }

  public saveMcqToUser(mcqId: string, ansId: string, rollNum: string, quizId: string, courseId: string) {
    let docRef = doc(db, `users/${this.normalizeRollNum(rollNum)}/courses/${courseId}/quizzes/${quizId}/`);
    return setDoc(docRef, {[`mcqs.${mcqId}`]: ansId}, {merge: true});
  }

  public async getUserQuiz(rollNum: string, courseId: string, quizId: string) {
    let docRef = doc(db, `users/${this.normalizeRollNum(rollNum)}/courses/${courseId}/quizzes/${quizId}/`);
    return getDoc(docRef);
  }
}

export default new DatabaseService();

