import React, { useState } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Footer } from './components/footer/footer';
import { TemplatesCode } from './components/templatesCode/templatesCode';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GetCode } from './components/getCode/getCode';

function App() {
  const [showTemplatesCode, setShowTemplatesCode] = useState(true);

  const handleGetCodeClick = () => {
    setShowTemplatesCode(false);
  };

  return (
    <div className="App">
      <Router>
      <header className="App-header">
      <Routes>
        <Route path="/get-code" element={<GetCode/>} />
        <Route path="/" element={<Header/>} />
        <Route path="/" element={<About/>} />
        {/* <Route path="/" element={<TemplatesCode/>} /> */}
        <Route path="/" element={<Footer/>} />
      </Routes>
          <Header></Header>
          <About/>
          {showTemplatesCode ? (
            <TemplatesCode onGetCodeClick={handleGetCodeClick} />
          ) : (
            <GetCode />
          )}
          <Footer/>
      </header>
      </Router>

     
    </div>
  );
}

export default App;
