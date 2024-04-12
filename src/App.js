import { useState } from 'react';
import './App.css';
import { Bio } from './components/Bio';
import Avatar from './ghepting.jpg';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <>
      <header>
        <nav id="nav" className="container">
          <div id="logo">
            <img src={Avatar} alt="Gary Hepting" />
            <span>Gary Hepting</span>
          </div>
          <div id="menu">
            <a href="#nav" id="menuIcon" className={isMenuActive ? 'active' : ''} onClick={() => setIsMenuActive(!isMenuActive)}><span>Menu</span></a>
            <ul>
              <li>
                <a className="active" href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="container">
        <Bio />
      </main>
    </>
  );
}

export default App;
