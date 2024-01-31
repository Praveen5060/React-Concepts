import React from 'react'
import Dashboard from './Dashboard';

export const userContext = React.createContext();

const context = () => {
  return (
    <div>
      <center>
        <userContext.Provider value={"Sample video"}>
            <Dashboard/>
        </userContext.Provider>
      </center>
    </div>
  )
}

export default context
