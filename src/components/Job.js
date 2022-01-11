import React, { useState } from 'react'
import { demographics } from '../data/alljobs'
const Job = () => {
  const [currentOccupation, setCurrentOccupation] = useState([])

  const weight = (arr) => {
    return [].concat(...arr.map((obj) => Array(Math.ceil(obj.weight * 100)).fill(obj)))
  }

  const pick = () => {
    let weighted = weight(demographics)
    return weighted[Math.floor(Math.random() * weighted.length)]
  }

  const generate = () => {
    setCurrentOccupation(pick())
  }

  return (
    <div className="container">
      <div className="run">
        <h2>Occupation</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={(currentOccupation && currentOccupation.icon) && currentOccupation.icon} alt="" />
          <p style={{ textTransform: 'capitalize', marginLeft: currentOccupation.icon && '1rem' }} className="occupation">
            {currentOccupation.name}
          </p>
        </div>
        <h2>Positive Traits</h2>
        <p className="positive">(coming soon ...)</p>
        <h2>Negative Traits</h2>
        <p className="negative">(coming soon ...)</p>
        <h3 className="balance">Balance: {currentOccupation.balance}</h3>
      </div>
      <button onClick={() => generate()}>Generate</button>
    </div>
  )
}

export default Job
