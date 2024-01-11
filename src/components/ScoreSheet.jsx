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
        <div className="page">
          <div className="score-sheet">
            <div className="top-line">
              <img
                src={TrebleClef}
                alt="treble clef svg"
                className="treble-clef"
              />
              <div className="music-score-line1"></div>
            </div>
            <div className="text-line"></div>
          </div>
          <div className="score-sheet">
            <div className="top-line">
              <img
                src={TrebleClef}
                alt="treble clef svg"
                className="treble-clef"
              />
              <div className="music-score-line1"></div>
            </div>
            <div className="text-line"></div>
          </div>
          <div className="score-sheet">
            <div className="top-line">
              <img
                src={TrebleClef}
                alt="treble clef svg"
                className="treble-clef"
                id="treble-clef3"
              />
              <div className="music-score-line1"></div>
            </div>
            <div className="text-line"></div>
          </div>
          <div className="score-sheet">
            <div className="top-line">
              <img
                src={TrebleClef}
                alt="treble clef svg"
                className="treble-clef"
                id="treble-clef4"
              />
              <div className="music-score-line1"></div>
            </div>
            <div className="text-line"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ScoreSheet
