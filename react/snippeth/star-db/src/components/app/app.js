import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from '../error-boundry';
import RandomPlanet from '../random-planet'

import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from '../pages';

import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService
      return {
        swapiService: new Service()
      }
    })
  }

  render() {

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Switch>
                <Route path="/"
                  render={() => <h2>Welcome To StarDB</h2>}
                  exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route path="/starships/:id"
                  render={({ match }) => {
                    return <StarshipDetails itemId={match.params.id} />
                  }} />
                <Route path="/login" exact
                  render={() => (
                    <LoginPage isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin} />
                  )} />
                <Route path="/secret" exact
                  render={() => (
                    <SecretPage isLoggedIn={isLoggedIn} />
                  )} />
                <Route render={() => <h2>Page Not Found</h2>} />
              </Switch>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
