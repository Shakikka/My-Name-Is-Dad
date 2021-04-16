import { connect } from 'react-redux';
import './searchedJokes.css'; 

const SearchedDadJokes = (props) => {
  return (
    <ul >
      {props.filteredJokes && props.filteredJokes.map(joke => {
        return (
              <h2 className='slide-top'><li key={joke.id}>{joke.joke}</li></h2>
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
