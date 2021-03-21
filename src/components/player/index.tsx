import React from 'react'

const AudioPlayer: React.FC = ({ sorce }) => {
  console.log('song: ', sorce)
  return (
    <div>
      <audio controls>
        <source src={sorce} type='audio/ogg' />
        <source src={sorce} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default AudioPlayer
