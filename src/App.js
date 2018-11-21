import React, { Component } from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCocktail , faMosque, faSpa, faUmbrellaBeach, faPlus } from '@fortawesome/free-solid-svg-icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import theme from './theme';

import Menu from './components/Menu';
import SectionLanding from './components/SectionLanding';
import SectionOffer from './components/SectionOffer';
import SectionReviews from './components/SectionReviews';
import SectionContactForm from './components/SectionContactForm';
import SectionAbout from './components/SectionAbout';
import Footer from './components/Footer';

import './App.css';

library.add(faUmbrellaBeach, faCocktail, faMosque, faSpa, faPlus);


class App extends Component {
  render() {
    return (
      <div className="App">
        <BootstrapProvider theme={theme} reset injectGlobal>
            <Menu />
            <SectionLanding />
            <SectionOffer />
            <SectionReviews />
            <SectionAbout />
            <SectionContactForm />
            <Footer />
        </BootstrapProvider>
      </div>
    );
  }
}

export default App;
