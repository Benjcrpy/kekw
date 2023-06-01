import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
        </div>
        <div className="footer-icons">
        <h1>KEKW FAMOUS</h1>
        <a href='https://twitter.com/Siyara_ulo' >
        <BsTwitter/>
        </a>
        <a href='https://t.me/KEKWStealth'>
        <BsTelegram/>
        </a>
        <h1>© 2023 KEKW.All Rights Reserved.</h1>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Footer