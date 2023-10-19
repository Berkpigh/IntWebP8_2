import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import locationList from '../../data/vingtannonces.json'
import homeimg from '../../assets/home.png'

function Home() {
  return (
    <React.Fragment>
      <div>
        <Banner imag={homeimg} parag="Chez vous, partout et ailleurs" />
      </div>
      <div className="homecard">
        <ul className="homecard-ul">
          {locationList.map(({ id, title }) => (
            <li className="homecard-ul__li" key={id}>
              <Link to={`/Logement/${id}`}>
                <p className="homecard-ul__li-p">{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}
export default Home
