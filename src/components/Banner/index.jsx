import React from 'react'
import { ReactDOM } from 'react'
function Banner({ imag, parag }) {
  return (
    <div className="banner">
      <img src={imag} alt="home" className="banner-image" />
      <p className="banner-p">{parag}</p>
    </div>
  )
}
export default Banner
