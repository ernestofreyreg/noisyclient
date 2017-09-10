import React from 'react'

const ScreenFrame =
  ({children}) => (
  <div className='ScreenFrame'>
    {children}

    {/*language=CSS*/}
    <style jsx>{`
      .ScreenFrame {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        background-color: white;
      }
    `}</style>
  </div>
)

export default ScreenFrame
