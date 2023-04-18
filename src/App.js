import logo from "./shecodeslogo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="SheCodelogo"></img>
      </header>

      <main>
        <Dictionary />
      </main>
      <footer>
        {" "}
        Coded by MDR -{" "}
        <a href="https://github.com/MarydeR/lilac-dictionary" target="_blank">
          OpenSource
        </a>{" "}
      </footer>
    </div>
  );
}
