import { Question } from '@/types/Question'
import { useState } from 'react'

type QuestionItemProps = {
  question: Question
  count: number
  onAnswer: (answer: string) => void
}

export const QuestionItem = ({
  question,
  count,
  onAnswer,
}: QuestionItemProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const checkQuestion = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key)

      setTimeout(() => {
        onAnswer(key)
        setSelectedAnswer(null)
      }, 1500)
    }
  }
  return (
    <div>
      <div className="text-3xl font-bold mb-5">
        {count}. {question.question}
      </div>
      <div>
        {question.options.map((item, key) => (
          <div
            className={`border border-blue-300 px-3 py-2 rounded-md text-lg mb-4  bg-blue-100
            
            ${
              selectedAnswer !== null
                ? 'cursor-auto'
                : 'cursor-pointer hover:opacity-60'
            }
            ${
              selectedAnswer !== null &&
              selectedAnswer === question.answer &&
              selectedAnswer === key &&
              'bg-green-100 border-green-300'
            }
            ${
              selectedAnswer !== null &&
              selectedAnswer !== question.answer &&
              selectedAnswer === key &&
              'bg-red-100 border-red-300'
            }
            `}
            key={key}
            onClick={() => checkQuestion(key)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
