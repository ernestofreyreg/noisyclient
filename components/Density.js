import React from 'react'

const Density = ({count}) => (
  <div className='BusPrediction'>
    <div className='title'>Density</div>
    <div className='info'>
      <div className='minutes'>{count}</div>
      <div className='right'>
        <div className='minutest'>person</div>
        <div className='direction'>(aproximate via bluetooth)</div>
      </div>
    </div>


    {/*language=CSS*/}
    <style jsx>{`
      .BusPrediction {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
      }

      .title {
        font-size: 20px;
        color: black;
        font-weight: 600;
      }

      .info {
        display: inline-flex;
        flex-direction: row;

      }

      .minutes {
        font-size: 120px;
        line-height: 100px;
        padding-right: 20px;
      }

      .right {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
      }

      .direction {
        display: inline-flex;
        font-size: 14px;
        color: black;
        font-weight: 600;
      }

      .minutest {
        font-size: 14px;
        color: #ccc;
      }

    `}</style>
  </div>
)

export default Density
