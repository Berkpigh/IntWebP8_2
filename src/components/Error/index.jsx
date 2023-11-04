import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'

function Error() {
  return (
    <React.Fragment>
      <div>
        <div className="error">
          <div className="error-frame">
            <p className="error-frame__p1">404</p>
            <p className="error-frame__p2">
              Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="error-frame__back">
              Retourner sur la page d’accueil
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
export default Error
