export interface McqChoice {
  text: string;
  id: string;
}

export interface ParsedMcq {
  text: string;
  opts: McqChoice[];
}

export interface DbMcq {
  text: string;
  opts: { [key: string]: string };
}

export interface WrongMcq {
  text: string;
  selectText: string;
  correct: string;
}

export interface McqWithAnswer extends DbMcq {
  // correct option id
  ans: string;
}

export interface ParsedMcqWithAnswer extends ParsedMcq {
  // correct option id
  ans: string;
}

export interface McqWithCorrectOption extends DbMcq {
  // correct option text
  correct: string;
}
