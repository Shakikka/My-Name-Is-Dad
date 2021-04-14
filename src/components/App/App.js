import React from 'react';
import './App.css';
import Header from '../Header/Header';
import DadJoke from '../Joke/Joke';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm'
import SearchedDadJokes from '../SearchedDadJokes/SearchedDadJokes'

const App = () => {
  return (
    <div>
      <Header />
      <SearchForm />
      <DadJoke />
      <SearchedDadJokes />
      <Footer />
    </div>
  );
}

export default App;
