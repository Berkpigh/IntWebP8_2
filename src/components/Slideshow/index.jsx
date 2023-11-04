import React from 'react'
import { useState } from 'react'

function Slideshow({ pA }) {
  const [imgNum, setimgNum] = useState(0)
  const picArray = pA
  const pIMax = picArray.length - 1
  var pICur = imgNum
  function lArrow() {
    pICur--
    if (pICur < 0) {
      pICur = pIMax
    }
    setimgNum(pICur)
  }
  function rArrow() {
    pICur++
    if (pICur > pIMax) {
      pICur = 0
    }
    setimgNum(pICur)
  }
  return (
    <React.Fragment>
      <div className="slideshow">
        <img
          className="slideshow-img"
          src={picArray[imgNum]}
          alt="image_carousel"
        />
        <div onClick={() => lArrow()} className="slideshow-leftar">
          <svg
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
        </div>
        <div onClick={() => rArrow()} className="slideshow-rightar">
          <svg
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </div>
        <p className="slideshow-p">
          {pICur + 1}/{pIMax + 1}
        </p>
      </div>
    </React.Fragment>
  )
}
export default Slideshow
