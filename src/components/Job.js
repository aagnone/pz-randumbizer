import React, { useState } from 'react'
import { demographics } from '../data/alljobs'
import { allTraits } from '../data/alltraits'

const Job = () => {
  const [currentOccupation, setCurrentOccupation] = useState({})
  const [negativeTraits, setNegativeTraits] = useState([])
  const [numTraits, setNumTraits] = useState(1)

  const weight = (arr) => {
    return [].concat(...arr.map((obj) => Array(Math.ceil(obj.weight * 100)).fill(obj)))
  }

  const pick = () => {
    let weighted = weight(demographics)
    return weighted[Math.floor(Math.random() * weighted.length)]
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }

  const generate = () => {
    setNegativeTraits([])
    setCurrentOccupation({})
    let listoftraits = allTraits;
    let traits = []
    setCurrentOccupation(pick())
    for (let i = 0; i < numTraits; i++) {
      const trait = listoftraits[getRandomInt(35)];
      listoftraits.filter(item => item.name !== trait.name)
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={currentOccupation && currentOccupation.icon && currentOccupation.icon} alt="" />
          <p
            style={{ textTransform: 'capitalize', marginLeft: currentOccupation.icon && '1rem' }}
            className="occupation"
          >
            {currentOccupation.name}
          </p>
        </div>
        <h2>Positive Traits</h2>
        <p className="positive">(coming soon ...)</p>
        <h2>Negative Traits</h2>
        {negativeTraits.map((trait) => {
          return <p className="negative">{trait.name}</p>
        })}
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
