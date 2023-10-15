import React from 'react'
import { useState } from 'react'

function Collapse({ collnum, title, texto }) {
  const [isOpen0, setOP0] = useState(false)
  const [isOpen1, setOP1] = useState(false)
  const [isOpen2, setOP2] = useState(false)
  const [isOpen3, setOP3] = useState(false)
  const [isOpenArrow, setOpenArrow] = useState(false)
  var ostat = false
  var cn = { collnum }.collnum
  switch (cn) {
    case 0:
      ostat = isOpen0
      break
    case 1:
      ostat = isOpen1
      break
    case 2:
      ostat = isOpen2
      break
    default:
      ostat = isOpen3
  }
  function openClose(cn) {
    ostat = !ostat
    switch (cn) {
      case 0:
        setOP0(ostat)
        break
      case 1:
        setOP1(ostat)
        break
      case 2:
        setOP2(ostat)
        break
      default:
        setOP3(ostat)
    }
  }
  // console.log(cn, ostat)
  return (
    <div className="collaps">
      <div>
        <div className="collaps-frame2">
          <p className="collaps-frame2__p1">{title}</p>
          <svg
            className="collaps-frame2__svg"
            onClick={() => openClose(cn)}
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="rotate(180 14 20)">
              <path
                d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
        <p
          className={
            isOpenArrow
              ? 'collaps-frame2__p2 collaps-frame2__show'
              : 'collaps-frame2__p2 collaps-frame2__hide'
          }
        >
          {texto}
        </p>
      </div>
    </div>
  )
}
export default Collapse
