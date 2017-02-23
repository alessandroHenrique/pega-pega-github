import React, { Component } from 'react';

class UserRepos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repos: []
    }
  }

  render() {
    var opa = {username: 'alessandro'};
    var response = {};

    return (
      <div className="main-content home">
        {this.state.repos.map(function (repo, i) {
          <a href="{repo.html_url}">{repo.name}</a>
        })}
      </div>
    );
  }

  fetchGitHubApi(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => {return response.json();})
      .then((data) => {
        this.setState({
          repos: data
        })
      })
  }
}

export default UserRepos;
