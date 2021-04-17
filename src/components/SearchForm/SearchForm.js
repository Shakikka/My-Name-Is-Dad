import React, { Component } from 'react';
import { searchData } from '../../actions/index';
import { connect } from 'react-redux';
import './form.css'; 

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
        this.clearInputs();
    }

    clearInputs = () => {
      this.setState({ searchWord: '' })
    }

    render() {
        return (
          <form>
                <input 
                    className='search-input'
                    type='text'
                    placeholder='Enter a Dadegory...'
                    id='searchWord'
                    name='searchWord'
                    value={this.state.searchWord}
                    onChange={this.handleChange}
                />
                <button className='search-btn' onClick={this.handleSubmit}>Search</button>
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
