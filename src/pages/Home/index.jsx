import React from 'react'
import Banner from '../../components/Banner'
import locationList from '../../data/vingtannonces.json'
import homeimg from '../../assets/home.png'

function Home() {
  return (
    <React.Fragment>
      <div>
        <Banner imag={homeimg} parag="Chez vous, partout et ailleurs" />
      </div>
      <div className='homecard'>
        <ul className="homecard-ul">
          {locationList
            .map(({ id, title }) => (
              <li className="homecard-ul__li" key={id}>
                <p className="homecard-ul__li-p">{title}</p>
              </li>
            ))}
        </ul>
      </div>
    </React.Fragment>
  )
}
export default Home
