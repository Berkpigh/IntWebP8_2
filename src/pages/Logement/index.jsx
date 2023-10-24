import { useParams } from 'react-router-dom'
import { useState } from 'react'
import locationList from '../../data/vingtannonces.json'
import Slideshow from '../../components/Slideshow'
import LogTags from '../../components/LogTags'
import LogRating from '../../components/LogRating'
import Description from '../../components/Description'
import Equipments from '../../components/Equipments'

function Logement() {
  const { logId } = useParams()
  const [descArrowDown, setdescArrow] = useState(false)
  const [equiArrowDown, setequiArrow] = useState(false)

  function getLog() {
    for (let i = 0; i < locationList.length; i++) {
      if (locationList[i].id === { logId }.logId) {
        return i
      }
    }
  }
  const lInd = getLog()
  const logX = locationList[lInd]
  const tagArr = logX.tags
  const logRating = parseInt(logX.rating)
  return (
    <div className="logement">
      <div className="logement-carousel">
        <Slideshow pA={logX.pictures} />
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
          <Description
            desc={logX.description}
            dA={descArrowDown}
            sdA={setdescArrow}
            eQ={equiArrowDown}
          />
          <Equipments
            equi={logX.equipments}
            eQ={equiArrowDown}
            seA={setequiArrow}
            sdA={setdescArrow}
            dA={descArrowDown}
          />
          /
        </div>
      </div>
    </div>
  )
}
export default Logement
