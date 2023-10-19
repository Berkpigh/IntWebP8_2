import { useParams } from 'react-router-dom'

function Logement() {
  const { logId } = useParams()
  return <div>{logId}</div>
}
export default Logement
