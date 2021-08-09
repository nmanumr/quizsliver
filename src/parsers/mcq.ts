import {McqChoice, ParsedMcq} from "../types";
import {IParser} from "./base";

export class McqParser implements IParser {
    private getQuestion(doc): string {
        return doc.querySelector('.question_box>*:first-child').innerText;
    }

    private getOptions(doc) {
        let options: McqChoice[] = [];
        let labels = doc.querySelectorAll('.question_box>label');
        labels.forEach((labelEl) => {
            options.push({
                text: labelEl.innerText,
                id: labelEl.title,
            });
        });

        return options;
    }

    public parse(doc): ParsedMcq {
        return {
            text: this.getQuestion(doc),
            opts: this.getOptions(doc),
        }
    }
}

export default new McqParser();
