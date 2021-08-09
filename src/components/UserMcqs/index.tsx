import { h } from 'preact';
import {McqsCard} from "./styles";
import Mcq from '../Mcq';

interface Props {
  mcqs: { [id: string]: string; };
  courseId: string;
}

export default function UserMcqs(props: Props) {
  if (!props.mcqs) {
    return (
      <McqsCard>
        <h1>Attempted Mcqs not Found</h1>
        <p>QuizSliver extension was not enabled while solving this quiz.</p>
      </McqsCard>
    );
  }

  return (
    <McqsCard>
      <h1>All Attempted Mcqs</h1>
      <ol>
        {Object.keys(props.mcqs).map((id) => (
          <Mcq
            mcq={id.replace("mcqs.", '')}
            selected={props.mcqs[id]}
            courseId={props.courseId}
          />
        ))}
      </ol>
    </McqsCard>
  )
}
