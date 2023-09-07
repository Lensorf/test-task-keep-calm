import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import FirstBlock from './components/FirstContentBlock/FirstContentBlock';
import SecondBlock from './components/SecondContentBlock/SecondContentBlock';

function App() {
  return (
    <>
      <Header />
      <FirstBlock />
      <Slider />
      <SecondBlock />
      <Footer />
    </>
  );
}

export default App;
