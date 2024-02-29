// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="latest-match-team-container">
        <div className="latest-match-team-text-container">
          <p className="latest-match-team-header">{competingTeam}</p>
          <p className="latest-match-team-header">{date}</p>
          <p className="latest-match-team-body">{venue}</p>
          <p className="latest-match-team-body">{result}</p>
        </div>
        <img
          className="competing-team-logo"
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
        />
      </div>
      <div className="latest-match-extra-details-container">
        <p className="latest-match-extra-details-header">First Innings</p>
        <p className="latest-match-extra-details-body">{firstInnings}</p>
        <p className="latest-match-extra-details-header">Second Innings</p>
        <p className="latest-match-extra-details-body">{secondInnings}</p>
        <p className="latest-match-extra-details-header">Man Of The Match</p>
        <p className="latest-match-extra-details-body">{manOfTheMatch}</p>
        <p className="latest-match-extra-details-header">Man Of The Match</p>
        <p className="latest-match-extra-details-body">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
