import React from 'react'

function Description({
  desc,
  descArr,
  sdescArr,
  equiArr,
  uDS,
  setuDS,
  uDA,
  setuDA,
}) {
  function inverseArrowPos() {
    descArr ? sdescArr(false) : sdescArr(true)
    descArr === equiArr ? setuDA(0) : descArr ? setuDA(2) : setuDA(1)
    descArr ? setuDS(1) : setuDS(0)
    console.log('uDS description: ', uDS)
  }
  return (
    <React.Fragment>
      <div className="description">
        <div className="description-topbar">
          <p className="description-topbar__p">Description</p>
          <svg
            className="description-topbar__svg"
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
        <p
          className={
            descArr
              ? 'description-description description-description__show'
              : 'description-description description-description__hide'
          }
        >
          {desc}
        </p>
      </div>
    </React.Fragment>
  )
}
export default Description
