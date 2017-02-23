import React, {Component} from 'react';
import PreviousPageButton from './PreviousPageButton';
import NextPageButton from './NextPageButton';


class SearchUser extends Component {
  render() {
    return (
      <form className="github-search-form" onSubmit={this.getUserInformation.bind(this)}>
        <div className="form-group">
          <input className="form-control" type="text" ref="search" placeholder="username"/>
        </div>
        <div className="form-group text-center">
          <PreviousPageButton currentPage={this.props.currentPage} onClick={this.getPreviousPage.bind(this)}/>
          <button type="submit" className="btn btn-primary">Submit</button>
          <NextPageButton totalCount={this.props.totalCount} currentPage={this.props.currentPage} onClick={this.getNextPage.bind(this)}/>
        </div>
      </form>
    )
  }

  getPreviousPage(e) {
    e.preventDefault();
    this.props.fetchApi(this.refs.search.value, this.props.currentPage - 1);
  }

  getNextPage(e) {
    e.preventDefault();
    this.props.fetchApi(this.refs.search.value, this.props.currentPage + 1);
  }

  getUserInformation(e) {
    e.preventDefault();
    console.info(this.refs.search.value)
    this.props.fetchApi(this.refs.search.value, 1);
  }
}

export default SearchUser;
