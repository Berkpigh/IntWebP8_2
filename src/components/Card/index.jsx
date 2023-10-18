import React from 'react'
import { useState } from 'react'
import locationList from '../../data/vingtannonces.json'
import LeftArrow from '../LeftArrow'
import RightArrow from '../RightArrow'
import LocationItem from '../LocationItem'

function Card() {
  const locLLen = locationList.length
  const [curI, setcurI] = useState(0)
  var curM = 6
  function nextGal(curI) {
    curI + 6 < locLLen ? setcurI(curI + 6) : (curI = 0)
    curM = curI + 6
  }
  function prevGal(curI) {
    curI - 6 >= 0 ? setcurI(curI - 6) : (curI = locLLen - 7)
    curM = curI + 6
  }
  return (
    <div className="card">
      <div>
        <LeftArrow />
      </div>
      <div>
        <RightArrow />
      </div>
    </div>
  )
}
export default Card
