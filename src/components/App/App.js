import React from 'react';
import './App.css';
import Header from '../Header/Header';
import DadJoke from '../Joke/Joke';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import SearchedDadJokes from '../SearchedDadJokes/SearchedDadJokes';
import { Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
        <Switch>
      <Route exact path='/' render={() => <DadJoke/> }/>
          <Route exact path='/search' render={() => {
            return (
              <>
                <SearchForm/>
                <SearchedDadJokes/>
              </>
            )}
            } />
          {/* <SearchForm />
          <DadJoke />
          <SearchedDadJokes /> */}
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
