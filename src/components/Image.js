import React from 'react'

const Image = props => {
  return (
    <div className='image-wrapper'>
        <img {...props} />
    </div>
  )
}

export default Image