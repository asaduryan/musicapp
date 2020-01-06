import React, { Component } from 'react';
import Song from './song'

class ResultsList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='resultList'>
        {data && data.data && data.data.map((item,i) => {
          return <Song key={i} song={item}/>
        })}
      </div>
    );
  }
}

export default ResultsList;