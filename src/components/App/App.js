import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import AboutMe from "../AboutMe/AboutMe";
import Rules from "../Rules/Rules"
import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { getJoke } from '../../utils/api';

//randomly generated key can go up here so it doesn't reset on a re-render

function App() {
  //changed the main / route to the repository name in an attempt to fix a rendering bug with gh-pages and react routing
  //generating joke from API
  const [ joke, setJoke ] = useState('');

  useEffect(() => {
    getJoke().then(res => setJoke(res.joke))
  }, [])

  return (
    <div className="App">
      <Header joke={joke}/>
      <Routes>
        <Route exact path="/se_code_cracker_frontend" element={<Main />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path ="/rules" element={<Rules />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;