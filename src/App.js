import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Landingpage from './Components/Landingpage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Landingpage />
      <Footer />
    </div>
  );
}

export default App;
