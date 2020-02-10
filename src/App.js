import React from 'react';
import './App.scss';

//components
import Nav from './components/nav/nav';

//Pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Home/>
    </div>
  );
}

export default App;
