import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSearch } from '../../actions'
import Search from './search'
import ResultsList from './resultsList'
class Home extends Component {
  componentDidMount() {
    // let query = {
    //   q: "eminem",
    //   index: 0,
    //   limit: 10,
    //   output: "json"
    // }
    // this.props.getSearch(query)
  }
  searchQuery = (q) => {
        let query = {
      q,
      index: 0,
      limit: 10,
      output: "json"
    }
    this.props.getSearch(query)
  }
  render() {
    return (
      <div className='home'>
        <Search searchQuery={this.searchQuery}/>
        {this.props.search && <ResultsList data={this.props.search}/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  search: state.search.data,
  searchLoading: state.search.loading
})

const mapDispatchToProps = {
  getSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

