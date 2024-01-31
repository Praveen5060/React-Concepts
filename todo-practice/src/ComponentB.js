import React from 'react'
import {UserContext} from './App.js'

const ComponentB = () => {
  return (
    <div>
      <UserContext.Consumer>
      {(value) => <div><p>{value}</p></div>}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentB
