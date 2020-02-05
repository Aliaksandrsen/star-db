import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './app.css';

export default class App extends Component {

  state = {
    selectedPerson: 5,
    loadingPerson: false,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedPerson !== prevState.selectedPerson) {
      this.setState({
        loadingPerson: true,
      })
    }
  }

  onUpdated = () => {
    this.setState({
      loadingPerson: false,
    })
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
      loadingPerson: true,
    })
  }

  render() {

    if (this.state.hasError) return <ErrorIndicator />
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={(id) => this.onPersonSelected(id)} />
          </div>
          <div className="col-md-6">
            <PersonDetails
              personId={this.state.selectedPerson}
              loadingPerson={this.state.loadingPerson}
              onUpdated={this.onUpdated}
              />
          </div>
        </div>
      </div>
    );
  };
};
