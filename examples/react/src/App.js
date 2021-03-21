import React from 'react'
import AudioPlayer from 'react-js-audio-player'
import song from './files/song.mp3'
const App = () => {
  return (
    <React.Fragment>
      <AudioPlayer source={song} />
    </React.Fragment>
  )
}

export default App
