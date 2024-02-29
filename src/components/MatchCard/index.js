// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {result, id, competingTeam, competingTeamLogo, matchStatus} =
    matchCardDetails

  return (
    <li className="match-card-li-container">
      <div className="match-card-competing-team-logo-container">
        <img
          className="match-card-competing-team-logo"
          alt={`competing team ${competingTeam}`}
          src={competingTeamLogo}
        />
      </div>
      <p className="match-card-competing-team-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p
        className={
          matchStatus === 'Won'
            ? 'match-card-status-won'
            : 'match-card-status-lost'
        }
      >
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
