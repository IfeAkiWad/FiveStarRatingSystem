import React, { useState } from 'react'

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState("")
  return (
    <div>
      <h2 className="feedback-heading-2">Have any feedback? Please share.</h2>
            <textArea 
              className="feedback-text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
            >
            </textArea>
            <button className="submit" /*type="submit" value="Submit"*/ onClick={() => setFeedback("")}>Submit</button>

    </div>
  )
}

export default FeedbackForm
