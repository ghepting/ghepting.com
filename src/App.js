import './App.css';
import { Bio } from './components/Bio';

function App() {
  return (
    <>
      <header>
        <nav id="nav">
          <a id="logo" href="/">Gary Hepting</a>
          <ul>
            <li>
              <a className="active" href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Bio />
      </main>
    </>
  );
}

export default App;
