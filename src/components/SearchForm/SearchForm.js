import React, { Component } from 'react';
import { searchData } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchWord: ''
    }
    console.log(this.props)
  }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchData(this.state.searchWord)
    }

    clearInputs = () => {
      this.setState({ searchWord: '' })
    }

    render() {
        return (
            <form>
                <input
                    type='text'
                    id='searchWord'
                    name='searchWord'
                    value={this.state.searchWord}
                    onChange={this.handleChange}
                />
                {/* <Link to='/searched'> */}
                  <button onClick={this.handleSubmit}>Search</button>
                {/* </Link> */}
            </form>

        )
    }
}

const mapStateToProps = state => {
  return {
    filteredJokes: state.filteredJokes
  }
}

export default connect(mapStateToProps, {searchData})(SearchForm)
