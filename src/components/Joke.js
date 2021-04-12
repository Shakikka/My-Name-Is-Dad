import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadJoke } from '../actions/index'
import { loadData } from '../reducers/index'
import { store } from '../index'

class DadJoke extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      store.dispatch(loadData)
    }

    render () {
        return (
           <div>
            {this.props.dadJoke}
          </div>
      )
    }
}


const mapStateToProps = state => {

  return state
}
//
// const displayJoke = ({ dadJoke }) => {
//     <p>{dadJoke.joke}</p>
// }

// const Joke = connect(mapStateToProps, {getData} )(displayJoke);
export default connect(mapStateToProps, {loadData})(DadJoke)
