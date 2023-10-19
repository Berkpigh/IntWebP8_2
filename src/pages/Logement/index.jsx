import { useParams } from 'react-router-dom'
import locationList from '../../data/vingtannonces.json'

function Logement() {
  const { logId } = useParams()
  var lInd = 0
  function getLog() {
    for (lInd = 0; lInd < locationList.length; lInd++) {
      console.log(locationList[lInd].id, { logId })
      if (locationList[lInd].id === { logId }.logId) {
        return lInd
      }
    }
  }
  return <div>{locationList[getLog()].description}</div>
}
export default Logement
