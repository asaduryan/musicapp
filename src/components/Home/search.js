import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       searchText: ''
    }
  }
  change(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  submit = (event) => {
    event.preventDefault();
   return this.props.searchQuery(this.state.searchText)
  }
  render() {
    return (
      <div className='search'>
        <form onSubmit={this.submit}>
          <input className='textSearch' placeholder="Find yours" type="text" name="searchText" onChange={(e) => this.change(e)} id="" />
          <i className='fas fa-search btnSearch' onClick={this.submit} />
        </form>
      </div>
    );
  }
}

export default Search;