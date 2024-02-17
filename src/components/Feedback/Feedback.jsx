import css from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positive}) => {
  const { good, neutral, bad } = feedback;
  return (
    <section>
      <ul className={css.feedbackList}>
        <li>Good: <span>{good}</span></li>
        <li>Neutral: <span>{neutral}</span></li>
        <li>Bad: <span>{bad}</span></li>
        <li>Total: <span>{totalFeedback}</span></li>
        <li>Positive: <span>{positive}%</span></li>
      </ul>
    </section>
  )
}

export default Feedback;