import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
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
            <Link to={`/Logement/${id}`} className="homecard-ul__a">
              <li className="homecard-ul__li" key={id}>
                <p className="homecard-ul__li-p">{title}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <Footer upDownStatus={0} upDownAction={0} />
      </div>
    </React.Fragment>
  )
}
export default Home
