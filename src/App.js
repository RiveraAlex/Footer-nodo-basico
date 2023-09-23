import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/paginas/inicio'

function App() {
  return (
    <div className="App">
      <Router>

        <Inicio/>

      </Router>





    </div>
  );
}

export default App;
