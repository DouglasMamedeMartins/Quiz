import { Question } from '@/types/Question'

type ResultsProps = {
  questions: Question[]
  answers: number[]
}

export const Results = ({ questions, answers }: ResultsProps) => {
  return (
    <div>
      {questions.map((item, key) => (
        <div className="mb-3" key={key}>
          <div className="font-bold">
            {key + 1}. {item.question}
          </div>
          <div>
            <span>
              ({item.answer === answers[key] ? 'Acertou!' : 'Errooou!'}) -
            </span>{' '}
            {item.options[item.answer]}
          </div>
        </div>
      ))}
    </div>
  )
}
