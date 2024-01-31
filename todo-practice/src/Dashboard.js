import React from 'react'
import AudioFile from './sample.mp3'
import Video from './video.mp4'
import {userContext} from './context'

//import {useHistory} from 'react-router-dom'

const Dashboard = () => {

  //let history = useHistory();

  return (
    <div>
      <center>
      <h1>Welcome to Dashboard Page</h1>

      <audio controls>
        <source src={AudioFile} />
      </audio>
      {/* <button onClick={ () => history.push('/about')}>Move to About</button> */}

      <br/> <br/>

      <video height='300' width='500' controls>
        <source src={Video} type='video/ogg'/>
      </video>

      <userContext.Consumer>
         {value => <div>{value}</div>}
      </userContext.Consumer>

      </center> 
    </div>
  )
}

export default Dashboard
