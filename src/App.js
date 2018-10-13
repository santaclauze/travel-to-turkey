import React, { Component } from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import theme from './theme';

import Menu from './components/Menu';
import SectionLanding from './components/SectionLanding';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BootstrapProvider theme={theme}>
          <Menu />
          <SectionLanding />
        </BootstrapProvider>
      </div>
    );
  }
}

export default App;
