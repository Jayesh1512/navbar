import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav>
  <ul className="nav-bar">
    <li className="logo">
      <a href="#">
        <img src={logo} />
      </a>
    </li>
    <input type="checkbox" id="check" />
    <span className="menu">
      <li>
        <a href="">👤Hello</a>
      </li>
      <li>
        <a href="">🤙Like</a>
      </li>
      <li>
        <a href="">☕Chai</a>
      </li>
      <li>
        <a href="">🏡Ghai Jao</a>
      </li>
      <li>
        <a href="">🎈Lollipop Lelo</a>
      </li>
      <label htmlFor="check" className="close-menu">
        X
      </label>
    </span>
    <label htmlFor="check" className="open-menu">
      MENOO
    </label>
  </ul>
</nav>

  );
}

export default App;
