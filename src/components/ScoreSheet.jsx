import React, { useState } from 'react'
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
              <div className="eighth-note-section">
                <div>
                  <input type="checkbox" />
                  <label htmlFor="cNote">C</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="cNote">C</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="cNote">C</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label htmlFor="cNote">C</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ScoreSheet
