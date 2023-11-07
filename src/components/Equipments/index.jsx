import React from 'react'

function Equipments({
  equi,
  equiArr,
  sequiArr,
  descArr,
  uDS,
  setuDS,
  uDA,
  setuDA,
}) {
  function inverseArrowPos() {
    if (equiArr === true) {
      sequiArr(false)
      decideuDSuDA(false)
    } else {
      sequiArr(true)
      decideuDSuDA(true)
    }
  }
  function decideuDSuDA(truefalse) {
    if (truefalse === descArr) {
      setuDA(0)
      if (truefalse) {
        setuDS(1)
      } else {
        setuDS(0)
      }
    } else {
      if (truefalse) {
        setuDS(1)
        setuDA(1)
      } else {
        setuDS(1)
        setuDA(2)
      }
    }
  }

  console.log('equipments descArr: ', descArr, 'equipments equiArr: ', equiArr)
  console.log('equipments uDS: ', uDS, 'uDA: ', uDA)

  return (
    <React.Fragment>
      <div className="equipments">
        <div className="equipments-topbar">
          <p className="equipments-topbar__p">Equipments</p>
          <svg
            className={
              equiArr
                ? 'equipments-topbar__svg equipments-topbar__svg-open'
                : 'equipments-topbar__svg equipments-topbar__svg-closed'
            }
            onClick={() => inverseArrowPos()}
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7897 0.789662C11.4591 0.120243 12.5462 0.120243 13.2157 0.789662L23.4979 11.0719C24.1674 11.7414 24.1674 12.8285 23.4979 13.4979C22.8285 14.1673 21.7414 14.1673 21.072 13.4979L12 4.42595L2.92804 13.4926C2.25862 14.162 1.17148 14.162 0.502064 13.4926C-0.167355 12.8231 -0.167355 11.736 0.502064 11.0666L10.7843 0.784307L10.7897 0.789662Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          className={
            equiArr
              ? 'equipments-b equipments-b-h100'
              : 'equipments-b equipments-b-h0'
          }
        >
          <ul
            className={
              equiArr
                ? 'equipments-b-equipments equipments-b-equipments__show'
                : 'equipments-b-equipments__hide'
            }
          >
            {equi.map((equi, index) => (
              <li key={index}>{equi}</li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Equipments
