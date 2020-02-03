import React from 'react';
import './App.scss';
import PortfolioImg from './assets/images/01.jpg';

//Pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <div className={"nav"}>
            <div className={""}>
                <span>viktor meltsyn</span>
            </div>
            <div className={"avatar-img"} style={{backgroundImage: `url(${PortfolioImg})`}}/>
        </div>
        <Home/>
    </div>
  );
}

export default App;
