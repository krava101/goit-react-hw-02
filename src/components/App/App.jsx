import { useState, useEffect } from 'react';
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from '../Notification/Notification';
const storageFeedbackKey = "feedback-info";

const getFeedback = () => {
  const feedbackData = window.localStorage.getItem(storageFeedbackKey)
  return feedbackData !== null ? JSON.parse(feedbackData) : {
    good: 0,
    neutral: 0,
    bad: 0
  }
}

const App = () => {
  const [feedback, setFeedback] = useState(getFeedback);
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positive = Math.round(((good + neutral) / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem(storageFeedbackKey, JSON.stringify(feedback));
  }, [feedback])


  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      return setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    })}
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    })
  }

  return (
    <>
      <Description />
      <Options totalFeedback={totalFeedback} onUpdate={updateFeedback} />
      {!totalFeedback ? <Notification>No feedback yet</Notification> : <Feedback
        feedback={feedback} totalFeedback={totalFeedback} positive={positive} />}
    </>
  )
}

export default App;