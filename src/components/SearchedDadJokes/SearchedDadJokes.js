import { connect } from 'react-redux';
import './searchedJokes.css';

const SearchedDadJokes = (props) => {
  return (
    <ul>
    {props.filteredJokes && !props.filteredJokes.search_term && <h2>Please insert a Dadegory above...</h2>}
    {props.filteredJokes && !props.filteredJokes.results.length && <h2>I'm Sorry, but your Dadegory isn't Dadly enough...</h2>}
      {props.filteredJokes && props.filteredJokes.search_term && props.filteredJokes.results.map(joke => {
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