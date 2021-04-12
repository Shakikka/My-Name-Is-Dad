import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { getData } from '../actions/index';

class DadJoke extends Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount() {
      getData();
    }

    render () {
        return (
           null
           )
    }
}


const mapStateToProps = state => {
    console.log(state)
    return {dadJoke: state.dadJoke}
}

const displayJoke = ({ dadJoke }) => {
    <p>{dadJoke.joke}</p>
}

const Joke = connect(mapStateToProps, {getData} )(displayJoke);

export default DadJoke;    