import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions/index'; 
import './Joke.css'; 

class DadJoke extends Component {
   
    componentDidMount() {
      this.props.loadData()
    }

    randomDadJoke = (event) => {
      event.preventDefault()
      this.props.loadData()
    }

    render () {
        return (
           <div>
            {this.props.dadJoke}
            <button onClick={this.randomDadJoke}>Summon Dad Joke</button>
          </div>
           )
    }
}

const mapStateToProps = state => {
  return {
    dadJoke: state.dadJoke
  }
}

export default connect(mapStateToProps, {loadData})(DadJoke)