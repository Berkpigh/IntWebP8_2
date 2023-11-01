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
    equiArr ? sequiArr(false) : sequiArr(true)
    descArr === equiArr ? setuDA(0) : equiArr ? setuDA(2) : setuDA(1)
    equiArr ? setuDS(1) : setuDS(0)
  }
  return (
    <React.Fragment>
      <div className="equipments">
        <div className="equipments-topbar">
          <p className="equipments-topbar__p">Equipments</p>
          <svg
            className="equipments-topbar__svg"
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
        <ul
          className={
            equiArr
              ? 'equipments-equipments equipments-equipments__show'
              : 'equipments-equipments equipments-equipments__hide'
          }
        >
          {equi.map((equi, index) => (
            <li key={index}>{equi}</li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}
export default Equipments
