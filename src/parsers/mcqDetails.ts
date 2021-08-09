import { TabularParser } from "./tabular";
import {WrongMcq} from "../types";
import {IParser} from "./base";

export class QuizDetailParser extends TabularParser<WrongMcq> implements IParser {

    constructor() {
        super();
        this.tableContainerSelector = ".allowance_table";
    }

    buildObj(row): WrongMcq {
        return {
            text: (TabularParser.getNthCol(row, 3).children[0] as HTMLElement).innerText,
            selectText: (TabularParser.getNthCol(row, 4).children[0] as HTMLElement).innerText,
            correct: (TabularParser.getNthCol(row, 5).children[0] as HTMLElement).innerText,
        }
    }
}

export default new QuizDetailParser();
