// import css from './Feedback.module.css'

const Feedback = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positive = Math.round(((good + neutral) / total) * 100);
  return (
    <section>
      <ul>
        <li>Good: <span>{good}</span></li>
        <li>Neutral: <span>{neutral}</span></li>
        <li>Bad: <span>{bad}</span></li>
        <li>Total: <span>{total}</span></li>
        <li>Positive: <span>{positive}%</span></li>
      </ul>
    </section>
  )
}

export default Feedback;