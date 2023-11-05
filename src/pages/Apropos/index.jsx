import React from 'react'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import apropimg from '../../assets/Aprop.png'

function Apropos() {
  const Fiab =
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
  const Resp =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  const Serv =
    'Le service fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  const Secu =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  const pm = []

  return (
    <React.Fragment>
      <div className="apropo">
        <Banner imag={apropimg} paragd="" paragm={pm} />
        <div className="apropo-collapse">
          <div className="apropo-collapse__list">
            <Collapse collnum={0} title="Fiabilité" texto={Fiab} />
            <Collapse collnum={1} title="Respect" texto={Resp} />
            <Collapse collnum={2} title="Service" texto={Serv} />
            <Collapse collnum={3} title="Sécurité" texto={Secu} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Apropos
