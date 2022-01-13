import React from 'react'

const Traits = ({ negativeTraits }) => {
  return (
    <div>
      <h2>Positive Traits</h2>
      <p className="positive">(coming soon ...)</p>
      <h2>Negative Traits</h2>
      {negativeTraits.map((trait) => {
        return <p className="negative">{trait.name}</p>
      })}
    </div>
  )
}

export default Traits
