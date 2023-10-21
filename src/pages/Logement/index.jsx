import { useParams } from 'react-router-dom'
import { useState } from 'react'
import locationList from '../../data/vingtannonces.json'
import LogTags from '../../components/LogTags'
import LogRating from '../../components/LogRating'
import Description from '../../components/Description'
import Equipments from '../../components/Equipments'

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
  //var picX = picArray[imgNum]
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
  const tagArr = logX.tags
  const logRating = parseInt(logX.rating)
  return (
    <div className="logement">
      <div className="logement-carousel">
        <img
          className="logement-carousel__img"
          src={picArray[imgNum]}
          alt="image_carousel"
        />
        <div onClick={() => lArrow()} className="logement-carousel__leftar">
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
        <div onClick={() => rArrow()} className="logement-carousel__rightar">
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
        <p className="logement-carousel__p">
          {pICur + 1}/{pIMax + 1}
        </p>
      </div>
      <div className="logement-section">
        <div className="logement-section__l1">
          <div className="logement-section__l1-tit">
            <p className="logement-section__l1-tit1">{logX.title}</p>
            <p className="logement-section__l1-tit2">{logX.location}</p>
          </div>
          <div className="logement-section__l1-host">
            <p className="logement-section__l1-host-name">{logX.host.name}</p>
            <img
              src={logX.host.picture}
              alt="host"
              className="logement-section__l1-host-img"
            />
          </div>
        </div>
        <div className="logement-section__l2">
          <div className="logement-section__l2-tags">
            {tagArr.map((tag, index) => (
              <div key={index}>
                <LogTags tg={tag} />
              </div>
            ))}
          </div>
          <div className="logement-section__l2-rate">
            <LogRating starNum={0} lr={logRating} />
            <LogRating starNum={1} lr={logRating} />
            <LogRating starNum={2} lr={logRating} />
            <LogRating starNum={3} lr={logRating} />
            <LogRating starNum={4} lr={logRating} />
          </div>
        </div>
        <div className="logement-section__l3">
          <Description desc={logX.description} />
          <Equipments eq={logX.equipments} />/
        </div>
      </div>
    </div>
  )
}
export default Logement
