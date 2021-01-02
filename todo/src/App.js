import logo from './logo.svg';
import {count, length} from './number.js'
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p style={{ color: "yellow", fontSize: 10 + 20 }}>Lorem, ipsum dolor.</p>
        <p>Итого: {count * length}</p>
        

      </header>
    </div>
  );
}

export default App;
