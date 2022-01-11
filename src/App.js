import React from 'react'
import Job from './components/Job';

const App = () => {
  return (
    <div className="zomboid">
      <div className="header">
        <h1>
          Project Zomboid run Randumbizer
        </h1>
      </div>
      <Job />
    </div>
  );
}

export default App;
