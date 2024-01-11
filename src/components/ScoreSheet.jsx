import React, { useState } from 'react'
import TrebleClef from '../assets/Do_Mayor_armadura.svg'
import './ScoreSheet.css'

function ScoreSheet() {
  const [isChecked, setIsChecked] = useState(false)

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

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
              <div>
                Select your pizza topping:
                <div className="topping">
                  <input
                    type="checkbox"
                    id="topping"
                    name="topping"
                    value="Paneer"
                    checked={isChecked}
                    onChange={handleOnChange}
                  />
                  Paneer
                </div>
                <div className="result">
                  Above checkbox is {isChecked ? 'checked' : 'un-checked'}.
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
