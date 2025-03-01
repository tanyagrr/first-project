import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Illustration from "./components/Illustration"

function App() {

  return (
    <>
      <div className="block1">
        <a href="https://aave.com/brand" className="Announcement_text">
          <div className="IntroducingFeature">Introducing our latest feature</div>
          <div className="small_dot" />
          <div className="ReadMore">
            Read more
            <svg
              className="arrow_right"
              width={11}
              height={10}
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 5H9.94444M9.94444 5L6.44444 1.5M9.94444 5L6.44444 8.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>
        <h1>Access the full power of learning.</h1>
        <p className="Intro">
          Learn It! is an engaging learning platform. <br /> Flashcards, quizzes,
          games and much more.
        </p>
        <div>
          <a href="https://app.aave.com/" className="GetStartedbutton">
            Get Started
            <svg
              className="arrow_right"
              width={11}
              height={10}
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5H9.94444M9.94444 5L6.44444 1.5M9.94444 5L6.44444 8.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="BottomText">
          <div className="dot" />
          <p className="Add">
            <span className="Add1">20+ templates</span> to make teaching and
            learning easier.
          </p>
        </div>
      </div>
      <div><Illustration /></div>
    </>
  )
}


export default App
