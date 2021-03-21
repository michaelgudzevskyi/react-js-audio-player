import React from 'react'

const AudioPlayer: React.FC = ({ source }) => {
  return (
    <div>
      <audio controls>
        <source src={source} type='audio/ogg' />
        <source src={source} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default AudioPlayer
