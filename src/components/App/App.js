import React from 'react';
import './App.css';
import Header from '../Header/Header';
import DadJoke from '../Joke/Joke';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import SearchedDadJokes from '../SearchedDadJokes/SearchedDadJokes';
import { Route, Switch } from 'react-router-dom';
import lawn from './fatherly-mowerscene.gif';

const App = () => {
  return (
    <div>
      <Header />
        <Switch>
      <Route exact path='/' render={() => <DadJoke/> }/>
          <Route exact path='/search' render={() => {
            return (
              <div className='search-page'>
                <img className='lawn' src={lawn}></img>
                <section>
                    <SearchForm />
                    <SearchedDadJokes />
                </section>
              </div>
            )
          }} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
