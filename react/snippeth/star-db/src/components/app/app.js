import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from '../error-boundry';
import RandomPlanet from '../random-planet'

import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService
      return {
        swapiService: new Service()
      }
    })
  }

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Route path="/" render={() => <h2>Welcome To StarDB</h2>} />
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} />

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
