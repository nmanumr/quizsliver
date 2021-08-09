import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import Spinner from '../Spinner';
import dbService from '../../services/database';
import {McqWithAnswer, McqWithCorrectOption} from "../../types";
import {Question, QuestionText, QuestionOption} from './styles';

interface Props {
  courseId: string;
  mcq: string;
  selected: string;
}

export default function Loader(props: Props) {
  const [loading, setLoading] = useState(true);
  const [mcq, setMcq] = useState<McqWithAnswer | McqWithCorrectOption>();

  useEffect(() => {
    dbService.getMcq(props.courseId, props.mcq)
      .then((mcq) => {
        setLoading(false);
        setMcq(mcq.data() as any);
      })
  }, []);

  if (loading) {
    return <Question><Spinner/></Question>;
  }

  return (
    <Question>
      <QuestionText>{mcq.text}</QuestionText>
      <div>
        {mcq.opts && Object.entries(mcq.opts).map(([optText, optId]) => {
          let isCorrect = optText == (mcq as McqWithAnswer).ans || optText == (mcq as McqWithCorrectOption).correct;
          let isSelected = props.selected == optText;

          return (
            <QuestionOption selected={isSelected} correct={isCorrect} disabled={!isCorrect && !isSelected}>
              {optText}
            </QuestionOption>
          )
        })}
      </div>
    </Question>
  )
}
