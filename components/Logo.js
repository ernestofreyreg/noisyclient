import React from 'react'
import Link from 'next/link'

const Logo = () => (
  <div className='Logo'>
    <Link href='/'><a>
      <img src='/static/noisy-logo-app.png' />
    </a></Link>


    <style jsx>{`
      .Logo {
        margin-bottom: 20px;
      }
    `}</style>
  </div>
)

export default Logo
