import { useParams } from 'react-router-dom'
import { useState } from 'react'
import locationList from '../../data/vingtannonces.json'

function Logement() {
  const { logId } = useParams()
  const [imgNum, setimgNum] = useState(0)
  function getLog() {
    for (let i = 0; i < locationList.length; i++) {
      if (locationList[i].id === { logId }.logId) {
        return i
      }
    }
  }
  const lInd = getLog()
  const logX = locationList[lInd]
  const picArray = logX.pictures
  const picX = picArray[imgNum]
  console.log(picX)
  return (
    <div className="logement">
      <div className="logement-carousel">
        <img
          className="logement-carousel__img"
          src={picX}
          alt="image_carousel"
        />
      </div>
    </div>
  )
}
export default Logement
