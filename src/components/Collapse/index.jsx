import React from 'react'
import { useState } from 'react'

function Collapse({ collnum, title, texto }) {
  const [isOpen0, setOP0] = useState(false)
  const [isOpen1, setOP1] = useState(false)
  const [isOpen2, setOP2] = useState(false)
  const [isOpen3, setOP3] = useState(false)
  var ostat = false
  var astat = false

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
  astat = ostat
  //console.log('A: ', cn, ostat, astat)
  function openClose(cn) {
    //console.log('ostat: ', ostat)
    ostat = !ostat
    switch (cn) {
      case 0:
        setOP0(ostat)
        astat = ostat
        break
      case 1:
        setOP1(ostat)
        astat = ostat
        break
      case 2:
        setOP2(ostat)
        astat = ostat
        break
      default:
        setOP3(ostat)
        astat = ostat
    }
  }
  //console.log('B: ', cn, ostat, isOpenArrow)
  return (
    <div className="collapse">
      <div>
        <div className="collapse-frame2">
          <p className="collapse-frame2__p1">{title}</p>
          <svg
            className={
              astat
                ? 'collapse-frame2__svg collapse-frame2__svg-open'
                : 'collapse-frame2__svg collapse-frame2__svg-closed'
            }
            onClick={() => openClose(cn)}
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
        <div
          className={ostat ? 'collapse-b collapse-b__show' : 'collapse-b__hide'}
        >
          <p className="collapse-b collapse-b-p2">{texto}</p>
        </div>
      </div>
    </div>
  )
}
export default Collapse
