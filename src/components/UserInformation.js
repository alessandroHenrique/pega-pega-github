import React, {Component} from 'react';


class UserInformation extends Component {
  render() {
    var data = this.props.data;
    if (data.totalCount === -1){
      return null
    } else if (data.totalCount > 0) {
      return (
        <div>{data.users.map(function (user, i) {
          return <a href={user.html_url} target="_blank"><img className="profile-image" src={user.avatar_url} title={user.login}/></a>

             })
        }
        </div>
      )
    } else {
      return (
        <div className="text-center">
          <h1>Profile not found</h1>
        </div>
      )
    }
  }
}

export default UserInformation;
