import React, { Component } from 'react';

class SearchForm extends Component {

    handleChange = e => {

    }

    handleSubmit = e => {
        e.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    id='searchWord'
                    value={searchWord}
                    onChange={this.handleChange}
                />
                <button>Search</button>
            </form>
            
        )
    }
}
