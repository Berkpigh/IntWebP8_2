import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import locationList from '../../data/vingtannonces.json'
import homeimg from '../../assets/home.png'

function Home() {
  const pm = ['Chez vous,', <br />, 'partout et ailleurs']
  return (
    <React.Fragment>
      <div className="home">
        <Banner
          imag={homeimg}
          paragd="Chez vous, partout et ailleurs"
          paragm={pm}
        />
        <div className="home-card">
          <ul className="home-card-ul">
            {locationList.map(({ id, title }) => (
              <Link to={`/Logement/${id}`} className="home-card-ul__a">
                <li className="home-card-ul__li" key={id}>
                  <p className="home-card-ul__li-p">{title}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Home
