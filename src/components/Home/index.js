import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getExamples } from '../../actions'

export class Home extends Component {
  componentDidMount() {
    // this.props.getExamples()
  }
  
  render() {
    console.log(getExamples)
    return (
      <div>
        Home component 2
        {()=>console.log(555)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  getExamples
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

