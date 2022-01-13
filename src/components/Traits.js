import React from 'react'

const Traits = ({ negativeTraits, positiveTraits }) => {
  return (
    <div>
      <h2>Positive Traits</h2>
        {positiveTraits.map((trait, i) => {
          return (
            <p key={i} className="positive">
              {trait.name}
            </p>
          )
        })}
      <h2>Negative Traits</h2>
      {negativeTraits.map((trait, i) => {
        return (
          <p key={i} className="negative">
            {trait.name}
          </p>
        )
      })}
    </div>
  )
}

export default Traits
