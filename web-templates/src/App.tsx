import React from 'react';
import './App.css';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Footer } from './components/footer/footer';
import { TemplatesCode } from './components/templatesCode/templatesCode';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <About/>
        <TemplatesCode/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
