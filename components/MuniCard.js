import React from 'react'
import Link from 'next/link'

const MuniCard = ({route, title, page}) => (
    <div className='MuniCard'>
      <div className='logo'>
        <Link href={page}><a><img src='/static/muni-logo.png'/></a></Link>
      </div>

      <div className='info'>
        <div className='route'><Link href={page}><a>{route}</a></Link></div>
        <div className='title'><Link href={page}><a>{title}</a></Link></div>
      </div>

      {/*language=CSS*/}
      <style jsx>{`
        .MuniCard {
          width: 100%;
          display: inline-flex;
          flex-basis: 166px;
          background-color: #4F051A;
          border-radius: 10px;
          margin-bottom: 20px;
          flex-direction: row;
        }

        .logo {
          display: inline-flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
        }

        .info {
          display: inline-flex;
          flex-direction: column;
          padding: 20px;
          flex-grow: 1;
        }

        .route {
          display: inline-flex;
          flex-direction: column;
          flex-grow: 1;
          color: white;
          font-size: 120px;
          line-height: 100px;
          align-items: flex-end;
        }

        .route a {
          text-decoration: none;
          color: white;
        }

        .title {
          display: inline-flex;
          flex-direction: column;
          flex-shrink: 0;
          color: white;
          font-size: 13px;
          text-align: right;
        }

        .title a {
          text-decoration: none;
          color: white;
        }
      `}</style>
    </div>
)

export default MuniCard
