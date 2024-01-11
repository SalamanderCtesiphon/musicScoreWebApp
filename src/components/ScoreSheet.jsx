import React from 'react'
import TrebleClef from '../assets/Do_Mayor_armadura.svg'
import './ScoreSheet.css'

function ScoreSheet() {
  return (
    <>
      <section>
        <header id="scoreheader">
          <h3>Your title goes here</h3>
        </header>
        <img src={TrebleClef} alt="treble clef svg" />
      </section>
    </>
  )
}

export default ScoreSheet
