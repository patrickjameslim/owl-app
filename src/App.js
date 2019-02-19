import React, { Component } from "react";
import "./App.css";
const axios = require("axios");

class App extends Component {
  state = {
    teams: [
      {
        id: 23423,
        logo: "https://via.placeholder.com/64",
        name: "Seoul Dynasty",
        players: [
          {
            first_name: "Jaehui",
            hometown: "Gunsan",
            id: 8590,
            image_url:
              "https://cdn.pandascore.co/images/player/image/8590/SMHDMNUINHC51512776037290.png",
            last_name: "Hong",
            name: "Gesture",
            role: "tank",
            slug: "gesture"
          }
        ]
      },
      {
        id: 29302,
        logo: "ttps://via.placeholder.com/64",
        name: "Dallas Fuel"
      }
    ]
  };

  componentWillMount() {
    axios({
      method: "get",
      url:
        "https://api.pandascore.co/ow/teams?token=o7Xg0ZCcVvOIYiypvOAoMRjUvJY7IvBocAxRl8KRgLp2Ut2kyn0&range[id]=1544,1555",
      responseType: "json"
    })
      .then(response => {
        this.setState({ teams: response.data });
        console.log(this.state.teams);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Overwatch Teams</h2>
        </div>
        <div className="content">
          <div className="team-list">
            {this.state.teams.map(team => {
              return (
                <div key={team.id} className="team">
                  <span className="logo">
                    <img src={team.image_url} alt={team.name} />
                  </span>
                  <h6 key={team.id} className="name">
                    {team.name}
                  </h6>
                </div>
              );
            })}
          </div>
          <div className="member-list">
            <div className="member">
              <div className="avatar">
                <img src={this.state.teams[0].players[0].image_url} />
              </div>
              <div className="name">
                <h3>{this.state.teams[0].players[0].name}</h3>
              </div>
              <span className="full-name">
                <span className="first-name">
                  {this.state.teams[0].players[0].first_name + " "}
                </span>
                <span className="last-name">
                  {this.state.teams[0].players[0].last_name}
                </span>
              </span>
            </div>
            <div className="member">
              <div className="avatar">
                <img src={this.state.teams[0].players[0].image_url} />
              </div>
              <div className="name">
                <h3>{this.state.teams[0].players[0].name}</h3>
              </div>
              <span className="full-name">
                <span className="first-name">
                  {this.state.teams[0].players[0].first_name + " "}
                </span>
                <span className="last-name">
                  {this.state.teams[0].players[0].last_name}
                </span>
              </span>
            </div>
            <div className="member">
              <div className="avatar">
                <img src={this.state.teams[0].players[0].image_url} />
              </div>
              <div className="name">
                <h3>{this.state.teams[0].players[0].name}</h3>
              </div>
              <span className="full-name">
                <span className="first-name">
                  {this.state.teams[0].players[0].first_name + " "}
                </span>
                <span className="last-name">
                  {this.state.teams[0].players[0].last_name}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
