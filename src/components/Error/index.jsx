import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <React.Fragment>
      <div className="error">
        <div className="error-frame">
          <p className="error-frame__p1">404</p>
          <p className="error-frame__p2-d">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <p className="error-frame__p2-m">
            Oups! La page que<br></br>vous demandez n'existe pas.
          </p>
          <Link to="/" className="error-frame__back">
            <p className="error-frame__back-p">
              Retourner sur la page d’accueil
            </p>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Error
