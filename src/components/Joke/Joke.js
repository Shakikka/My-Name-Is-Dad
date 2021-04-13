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
            <section>
              {this.props.dadJoke}
              <button onClick={this.randomDadJoke}>Summon Dad Joke</button>
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