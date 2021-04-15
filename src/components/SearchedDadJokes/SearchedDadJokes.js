import { connect } from 'react-redux'

const SearchedDadJokes = (props) => {
  return (
    <ul>
      {props.filteredJokes && props.filteredJokes.map(joke => {
        return (
          <li key={joke.id}>{joke.joke}</li>
        )
      })}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    filteredJokes: state.filteredJokes
  }
}

export default connect(mapStateToProps)(SearchedDadJokes)
