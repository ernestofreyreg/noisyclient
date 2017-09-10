import React from 'react'
import Link from 'next/link'

const ParisomaCard = ({page}) => (
  <div className='ParisomaCard'>
    <div className='logo'>
      <Link href={page}><a><img src='/static/parisoma-logo.png'/></a></Link>
    </div>

    {/*language=CSS*/}
    <style jsx>{`
        .ParisomaCard {
          width: 100%;
          display: inline-flex;
          flex-basis: 166px;
          background-color: #4F051A;
          border-radius: 10px;
          margin-bottom: 20px;
          flex-direction: row;
          background: url(/static/parisoma-back.png);
        }

        .logo {
          display: inline-flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
        }
      `}</style>
  </div>
)

export default ParisomaCard
