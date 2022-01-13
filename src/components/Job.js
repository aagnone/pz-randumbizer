import React, { useState } from 'react'
import { demographics } from '../data/alljobs'
import { allTraits } from '../data/alltraits'
import { pick, getRandomInt } from '../helpers/functions'
import Traits from './Traits'

const Job = () => {
  const [currentOccupation, setCurrentOccupation] = useState({})
  const [negativeTraits, setNegativeTraits] = useState([])
  const [numTraits, setNumTraits] = useState(1)

  const reset = () => {
    setNegativeTraits([])
    setCurrentOccupation({})
  }

  const generate = () => {
    reset()
    let listoftraits = allTraits
    let traits = []
    setCurrentOccupation(pick(demographics))
    for (let i = 0; i < numTraits; i++) {
      const trait = listoftraits[getRandomInt(35)]
      listoftraits = listoftraits.filter((item) => item.name !== trait.name)
      traits = [...traits, trait]
    }
    setNegativeTraits(traits)
  }

  const onChange = (e) => {
    setNumTraits(e.target.value)
  }

  return (
    <div className="container">
    
      <div className="run">
        <h2>Occupation</h2>
        <div className="occupation">
          <img src={currentOccupation && currentOccupation.icon && currentOccupation.icon} alt="" />
          <p
            style={{ textTransform: 'capitalize', marginLeft: currentOccupation.icon && '1rem' }}
            className="occupation"
          >
            {currentOccupation.name}
          </p>
        </div>
        <Traits negativeTraits={negativeTraits} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h3>Difficulty</h3>
        <select style={{ marginLeft: '1rem' }} id="traits" onChange={(e) => onChange(e)} value={numTraits}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </select>
      </div>
      <button onClick={() => generate()}>Generate</button>
    </div>
  )
}

export default Job
