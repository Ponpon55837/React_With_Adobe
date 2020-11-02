import React from 'react'

const styleContent = {
  minHeight: '800px',
  backgroundColor: '#7E928B',
  opacity: '0.7'
}

const Content = ({ children }) => {

  return (
    <div className='p-5' style={styleContent}>
      {children}
    </div>
  )
}

export default Content
