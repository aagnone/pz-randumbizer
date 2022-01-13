import React from 'react'

const Balance = ({ appBalance }) => {

  return (
    <div>
      <h3>Points to Spend: {appBalance || 0}</h3>
    </div>
  )
}

export default Balance
