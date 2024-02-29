// Write your code here
import './index.css'

const TeamCard = props => {
  const {cardItem} = props
  const {id, name, teamImageUrl} = cardItem
  return (
    <li className="team-card-li-container">
      <img className="team-card-logo" alt={name} src={teamImageUrl} />
      <p className="team-card-name">{name}</p>
    </li>
  )
}

export default TeamCard
