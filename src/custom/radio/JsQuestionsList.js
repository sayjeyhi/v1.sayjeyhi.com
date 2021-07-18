import React from "react"
import Accordion from "../common/accordion"
import { jsQuestions } from "./questions"

const JsQuestionsList = () =>
  jsQuestions.map((question, index) => (
    <Accordion title={question.title} isRTL open={index === 0}>
      <div style={{ marginTop: 10 }}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio controls>
          <source
            src={`/files/radio/javascript-question/${index + 1}.ogg`}
            type="audio/ogg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </Accordion>
  ))

export default JsQuestionsList
