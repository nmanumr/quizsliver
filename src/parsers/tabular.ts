import {IParser} from "./base";

export abstract class TabularParser<T> implements IParser {

    tableContainerSelector: string;

    buildObj(_: any): T {
        return null;
    }

    static getNthCol(row: HTMLElement, n: number): HTMLElement {
        return row.querySelector(`td:nth-child(${n})`);
    }

    static getNthColText(row: HTMLElement, n: number): string {
        return TabularParser.getNthCol(row, n).innerText;
    }

    public parse(element, isDocument = true): T[] {
        let data = [];
        let rows;
        if (isDocument)
            rows = element.querySelectorAll(`${this.tableContainerSelector} table>tbody>tr`);
        else
            rows = element.querySelectorAll(`tbody>tr`);

        rows.forEach((row) => {
            if (!row.innerText.match(/No data available/i))
                data.push(this.buildObj(row));
        });

        return data;
    }
}
