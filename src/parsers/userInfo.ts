import {IParser} from "./base";

export class UserInfoParser implements IParser {
  public parse(doc: Document): IUserInfo {
    let text = document.querySelector<HTMLElement>(".top_row").innerText;
    let rollNum = text.match(/CIIT\/\w{2}\d{2}-\w{3}-\d{3}\/\w{3}/)[0];
    let [name, father] = document.querySelector('.top_row span').getAttribute('title').split(" S/D/O ");

    return {rollNum, name, father};
  }
}

export interface IUserInfo {
  rollNum: string;
  name: string;
  father: string;
}

export default new UserInfoParser();
