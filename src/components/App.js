import React, { Component } from 'react';
import NavLink from './NavLink';
import About from './About';
import UserInformation from './UserInformation';
import SearchUser from './SearchUser';
import { Link } from 'react-router'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      repos: '',
      profileImage: '',
      totalCount: -1,
      users: [],
      currentPage: 1
    }
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <ul role="nav">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/repos/renato">Repos</Link></li>
          </ul>
          <UserInformation data={this.state} />
          <SearchUser fetchApi={this.fetchUser.bind(this)} currentPage={this.state.currentPage} totalCount={this.state.totalCount}/>
        </div>
        {this.props.children}
      </div>
    )
  }

  fetchGitHubApi(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {return response.json();})
      .then((data) => {
        this.setState({
          username: data.login,
          repos: data.public_repos,
          profileImage: data.avatar_url,
          totalCount: data.total_count
        })
      })
  }

  getUser() {
    alert("funcionou");
  }

  fetchUser(username, page_number) {
    fetch(`https://api.github.com/search/users?per_page=28&page=${page_number}&q=${username}`)
      .then((response) => {return response.json();})
      .then((data) => {
        this.setState({
          users: data.items,
          currentPage: page_number,
          totalCount: data.total_count
        })
      })
  }
}

export default App;
