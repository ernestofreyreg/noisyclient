import React from 'react'

const Container = ({children}) => (
  <div className='Container'>
    {children}

    {/*language=CSS*/}
    <style jsx>{`
      .Container {
        display: flex;
        flex-direction: column;
        padding: 20px;
      }
    `}</style>
  </div>
)

export default Container
