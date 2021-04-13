import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions/index'; 
import './Joke.css'; 
import dad from './dad.png';

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
          <main>
            <section>
              <img src={dad} alt="Dad"></img>
            </section>
            <section className="joke-container">
              <button className="joke-btn" onClick={this.randomDadJoke}>Summon Dad Joke</button>
              <h2>{this.props.dadJoke}</h2>
            </section>
          </main>
           )
    }
}

const mapStateToProps = state => {
  return {
    dadJoke: state.dadJoke
  }
}

export default connect(mapStateToProps, {loadData})(DadJoke)