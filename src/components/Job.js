import React, { useState, useEffect } from 'react'
import { demographics } from '../data/alljobs'
import { allNegativeTraits } from '../data/allNegativetraits'
import { pick, getRandomInt, addArray } from '../helpers/functions'
import Traits from './Traits'
import { allPositiveTraits } from '../data/allPositiveTraits'

const Job = () => {
  const [currentOccupation, setCurrentOccupation] = useState({})
  const [negativeTraits, setNegativeTraits] = useState([])
  const [positiveTraits, setPositiveTraits] = useState([])
  const [numTraits, setNumTraits] = useState(1)
  const [appBalance, setAppBalance] = useState(0)
  const [remainingNegative, setRemainingNegative] = useState([])
  const [remainingPositive, setRemainingPositive] = useState(allPositiveTraits)
  const [loading, setLoading] = useState(false)

  const reset = () => {
    setNegativeTraits([])
    setCurrentOccupation({})
  }

  const generate = () => {
    reset()
    let listoftraits = allNegativeTraits
    let traits = []
    setCurrentOccupation(pick(demographics))
    for (let i = 0; i < numTraits; i++) {
      const trait = listoftraits[getRandomInt(35)]
      listoftraits = listoftraits && listoftraits.filter((item) => item && item.name !== trait.name)
      setRemainingNegative(listoftraits)
      traits = [...traits, trait]
    }
    setNegativeTraits(traits)
  }

  const onChange = (e) => {
    setNumTraits(e.target.value)
  }

  const balanceNegative = (toBalance, array, totalArray) => {
    setLoading(true)
    if (toBalance >= 0) {
      const newNegativeTraits = negativeTraits.concat(array)
      setAppBalance(toBalance)
      setNegativeTraits(newNegativeTraits)
      setRemainingNegative(totalArray)
      setLoading(false)
      return
    }
    let newTotalArray = totalArray
    let newArray = array
    let newBalance = []
    const trait = allNegativeTraits[getRandomInt(35)]
    newArray.push(trait)
    newTotalArray = newTotalArray.filter((item) => item && item.name !== trait.name)
    newBalance = newArray.map((trait) => trait.points)
    balanceNegative(toBalance + newBalance.reduce(addArray, 0), newArray, newTotalArray)
  }

  const balancePositive = (toBalance, array, totalArray) => {
    setLoading(true)
    if (toBalance === 0) {
      setAppBalance(toBalance)
      setPositiveTraits(array)
      setRemainingPositive(totalArray)
      setLoading(false)
      return
    }
    let newTotalArray = totalArray
    let newArray = array
    let newBalance = []
    const trait = allPositiveTraits[getRandomInt(35)]
    newArray.push(trait)
    newBalance = newArray.map((trait) => trait.points)
    newTotalArray = newTotalArray.filter((item) => item && item.name !== trait.name)
    let newToBalance = toBalance + newBalance.reduce(addArray, 0)
    while (newToBalance < 0) {
      const newTrait = newTotalArray[getRandomInt(newTotalArray.length)]
      newArray.pop()
      newTotalArray = newTotalArray.filter((item) => item && item.name !== newTrait.name)
      newArray.push(newTrait)
      newBalance = newArray.map((newTrait) => newTrait.points || 0)
      newToBalance = toBalance + newBalance.reduce(addArray, 0)
    }
    balancePositive(newToBalance, array, newTotalArray)
  }

  useEffect(() => {
    const negativeTraitPoints = negativeTraits.map((trait) => trait.points)
    const totalBalance = [currentOccupation.balance, ...negativeTraitPoints].reduce(addArray, 0)
    setAppBalance(totalBalance)
    if (totalBalance < 0) balanceNegative(totalBalance, [], remainingNegative)
    if (totalBalance > 0) balancePositive(totalBalance, [], remainingPositive)
    return
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [negativeTraits])

  return (
    <div className="container">
      <div className="run">
        {loading && <>Calculating...</>}
        <h2>Occupation</h2>
        {currentOccupation && (
          <div className="occupation">
            <img src={currentOccupation && currentOccupation.icon && currentOccupation.icon} alt="" />
            <p
              style={{ textTransform: 'capitalize', marginLeft: currentOccupation.icon && '1rem' }}
              className="occupation"
            >
              {currentOccupation.name}
            </p>
          </div>
        )}
        <Traits positiveTraits={positiveTraits} negativeTraits={negativeTraits} />
        <div>
          <h3>Points to Spend: {appBalance || 0}</h3>
        </div>
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
