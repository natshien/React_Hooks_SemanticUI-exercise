import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import Films from './components/Films';
import Species from './components/Species';


function App() {
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFilms() {
      let res = await fetch('https://swapi.co/api/films/');
      let data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }
    async function fetchSpecies() {
      let res = await fetch('https://swapi.co/api/species/');
      let data = await res.json();
      setSpecies(data.results);
      setLoading(false);
    }
    fetchFilms();
    fetchSpecies();
  },[]);

  console.log('data' , films);
  console.log('data2' , species);

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading...</Loader>
            </Dimmer>
          ) : (
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/films">
              <Films data={films}/>
            </Route>
            <Route exact path="/species">
              <Species data={species}/>
            </Route>
            </Switch>
          )}
        </Container>
      </Router>
     
    </div>
  );
}


export default App;

