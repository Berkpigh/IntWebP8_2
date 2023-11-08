import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import locationList from '../../data/vingtannonces.json'
import dummyList from '../../data/dummyannonces.json'
import Slideshow from '../../components/Slideshow'
import LogTags from '../../components/LogTags'
import LogRating from '../../components/LogRating'
import Description from '../../components/Description'
import Equipments from '../../components/Equipments'

function Logement() {
  const { logId } = useParams()
  const [descArrowDown, setdescArrow] = useState(false)
  const [equiArrowDown, setequiArrow] = useState(false)
  const [upDownStatus, setupDownStatus] = useState(0)
  const [upDownAction, setupDownAction] = useState(0)
  const navigate = useNavigate()

  const locmax = locationList.length
  var logxInd = 0
  var logX = dummyList[0]
  var tagArr = logX.tags
  var logRating = parseInt(logX.rating)

  function getLog() {
    for (let i = 0; i < locmax; i++) {
      if (locationList[i].id === { logId }.logId) {
        return i
      }
    }
    return locmax
  }
  function testLog() {
    if (logInd >= locmax) {
      return true
    }
    return false
  }

  console.log({ logId }.logId)
  const logInd = getLog()
  console.log(logInd, locmax)
  const bErr = testLog()
  console.log('upupDownStatus: ', { upDownStatus })

  if (bErr === false) {
    logxInd = logInd
    logX = locationList[logxInd]
    tagArr = logX.tags
    logRating = parseInt(logX.rating)
  }

  return (
      <div>
        {(bErr === true) ? navigate("/Error") : 
      <React.Fragment>
        <div>
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
            <div className="logement-section__l3-details">
              <Description
                desc={logX.description}
                descArr={descArrowDown}
                sdescArr={setdescArrow}
                equiArr={equiArrowDown}
                uDS={upDownStatus}
                setuDS={setupDownStatus}
                uDA={upDownAction}
                setuDA={setupDownAction}
              />
              <Equipments
                equi={logX.equipments}
                equiArr={equiArrowDown}
                sequiArr={setequiArrow}
                descArr={descArrowDown}
                uDS={upDownStatus}
                setuDS={setupDownStatus}
                uDA={upDownAction}
                setuDA={setupDownAction}
              />
            </div>
            <div className="logement-section__l3-rate">
              <LogRating starNum={0} lr={logRating} />
              <LogRating starNum={1} lr={logRating} />
              <LogRating starNum={2} lr={logRating} />
              <LogRating starNum={3} lr={logRating} />
              <LogRating starNum={4} lr={logRating} />
            </div>
            <div className="logement-section__l3-host">
              <p className="logement-section__l3-host-name">{logX.host.name}</p>
              <img
                src={logX.host.picture}
                alt="host"
                className="logement-section__l3-host-img"
              />
            </div>
          </div>
          <div className="logement-section__l4">
            <Description
              desc={logX.description}
              descArr={descArrowDown}
              sdescArr={setdescArrow}
              equiArr={equiArrowDown}
              uDS={upDownStatus}
              setuDS={setupDownStatus}
              uDA={upDownAction}
              setuDA={setupDownAction}
            />
            <Equipments
              equi={logX.equipments}
              equiArr={equiArrowDown}
              sequiArr={setequiArrow}
              descArr={descArrowDown}
              uDS={upDownStatus}
              setuDS={setupDownStatus}
              uDA={upDownAction}
              setuDA={setupDownAction}
            />
          </div>
        </div>
        </React.Fragment>
      }
      </div>
  )
}
export default Logement
