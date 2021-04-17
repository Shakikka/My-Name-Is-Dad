import { connect } from 'react-redux';
import './searchedJokes.css'; 

const SearchedDadJokes = (props) => {
  return (
    <ul >
      {props.filteredJokes && props.filteredJokes.map(joke => {
        return (
          <div className='searched-container'>
              <h2 className='slide-top'><li key={joke.id}>{joke.joke}</li></h2>
        </div>
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
