import React from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import homeimg from '../../assets/home.png'

function Home() {
  return (
    <React.Fragment>
      <div>
        <Banner imag={homeimg} parag="Chez vous, partout et ailleurs" />
      </div>
      <div>
        <Card />
      </div>
    </React.Fragment>
  )
}
export default Home
