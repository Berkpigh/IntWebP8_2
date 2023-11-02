import React from 'react'

function Banner({ imag, paragd, paragm }) {
  console.log(paragm)
  return (
    <div className="banner">
      <img src={imag} alt="home" className="banner-image" />
      <p className="banner-p__d">{paragd}</p>
      <ul className="banner-p__m1">
        {paragm.map((pm, index) => (
          <li key={index} className="banner-p__m2">
            {pm}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Banner
