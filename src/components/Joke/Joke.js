import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../actions/index'; 
import './Joke.css'; 
import dad from './dad-gif.gif';


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
          <main >
            <section>
              <img className='dad' src={dad} alt="Dad"></img>
            </section>
            <section className="joke-container">
                <div>
                  <button className="joke-btn" onClick={this.randomDadJoke}>Summon Dad Joke</button>
                </div>
                <h2 className='slide-top'>{this.props.dadJoke}</h2>
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
