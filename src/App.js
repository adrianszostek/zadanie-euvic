import Logo from './logo.js';
import './App.css';
import React, { Component } from 'react'
import ProviderCard from './ProviderCard';
import { Menu, Search, AccountCircle } from '@mui/icons-material'

class App extends Component {
  state = {
    providers: []
  }
  componentDidMount() {
    /* request the data from the NFZ API */
    let filteredUrl = 'https://api.nfz.gov.pl/app-itl-api/queues?page=1&limit=25&format=json&case=1&province=12&benefitForChildren=true&locality=GLIWICE&api-version=1.3'
    fetch(filteredUrl)
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            providers: result.data
          })
        }
      )
  }
  render() {
    /* generate the containers for each provider */
    let cards = this.state.providers.map(providerData => {
      return <ProviderCard key={providerData.id} providerData={providerData.attributes} />
    });
    return (
      <div className="app">
        <header className="app-header">
          <div>
            <Menu />
            <div>
              <Search />
              <AccountCircle />
            </div>
          </div>
          <Logo className="logo-graphics" />
        </header>
        <div className='providers'>
          {cards}
        </div>
      </div>
    );
  }
}

export default App;
