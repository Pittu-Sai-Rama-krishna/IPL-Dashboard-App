// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.fetchTeamMatchDetails()
  }

  fetchTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const {team_banner_url, latest_match_details, recent_matches} = data
    const latestMatchDetailsObject = {
      umpires: latest_match_details.umpires,
      result: latest_match_details.result,
      manOfTheMatch: latest_match_details.man_of_the_match,
      id: latest_match_details.id,
      date: latest_match_details.date,
      venue: latest_match_details.venue,
      competingTeam: latest_match_details.competing_team,
      competingTeamLogo: latest_match_details.competing_team_logo,
      firstInnings: latest_match_details.first_innings,
      secondInnings: latest_match_details.second_innings,
      matchStatus: latest_match_details.match_status,
      currentTeamId: id,
    }
    const recentMatchesArray = recent_matches.map(recent_matches => ({
      result: recent_matches.result,
      id: recent_matches.id,
      competingTeam: recent_matches.competing_team,
      competingTeamLogo: recent_matches.competing_team_logo,
      matchStatus: recent_matches.match_status,
    }))
    console.log(latestMatchDetailsObject, recentMatchesArray)
    this.setState({
      teamBannerUrl: team_banner_url,
      latestMatchDetails: latestMatchDetailsObject,
      recentMatches: recentMatchesArray,
      isLoading: false,
    })
  }

  render() {
    const {teamBannerUrl, latestMatchDetails, recentMatches, isLoading} =
      this.state
    const {currentTeamId} = latestMatchDetails

    return (
      <div className={`team-matches-container ${currentTeamId}`}>
        {isLoading ? (
          <div className="loader" testid="loader">
            <Loader type="Oval" color="black" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-container-dm">
            <img
              className="team-banner"
              alt="team banner"
              src={teamBannerUrl}
            />
            <p className="latest-matches-text">Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="match-card-ul-container">
              {recentMatches.map(eachItem => (
                <MatchCard matchCardDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
