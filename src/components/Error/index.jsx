import { Link } from 'react-router-dom'

function Error() {
  return (
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
  )
}
export default Error
