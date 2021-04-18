import { connect } from 'react-redux';
import './searchedJokes.css'; 

const SearchedDadJokes = (props) => {
  return (
    <ul >
      {props.filteredJokes && props.filteredJokes.map(joke => {
        return (
            <h2 className='slide-top' key={joke.id}><li>{joke.joke}</li></h2>
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
