// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data.teams)
    const cardsList = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCardsList: cardsList, isLoading: false})
  }

  render() {
    const {teamCardsList, isLoading} = this.state

    return (
      <div className="home-container">
        {isLoading ? (
          <div className="loader" testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="home-container-dm">
            <div className="ipl-container">
              <img
                className="ipl-logo"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1 className="ipl-text">IPL Dashboard</h1>
            </div>
            <ul className="team-card-container">
              {teamCardsList.map(eachItem => (
                <Link
                  to={`/team-matches/${eachItem.id}`}
                  key={eachItem.id}
                  className="card-link"
                >
                  <TeamCard cardItem={eachItem} key={eachItem.id} />
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
