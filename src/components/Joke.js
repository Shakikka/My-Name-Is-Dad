import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../actions/index'

class DadJoke extends Component {
   
    componentDidMount() {
      this.props.loadData()
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
  return {
    dadJoke: state.dadJoke
  }
}

export default connect(mapStateToProps, {loadData})(DadJoke)