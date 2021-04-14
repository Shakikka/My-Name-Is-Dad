import React, { Component } from 'react'
import { connect } from 'react-redux'

class SearchedDadJokes extends Component {
  constructor(props) {
    super(props)
  }
  render(props) {
    return (
      <ul>
        {this.props.filteredJokes && this.props.filteredJokes.map(joke => {
          return (
            <li key={joke.id}>{joke.joke}</li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    filteredJokes: state.filteredJokes
  }
}

export default connect(mapStateToProps)(SearchedDadJokes)
