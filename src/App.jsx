import logo from './logo.svg';
import './App.css';
import { Signup } from './components/Signup';
import { Route,Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Notes } from './components/Notes';
function App() {
  return (
    <div className="App">
       <h1>Notes app</h1>
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/notes' element={<Notes/>} />
      </Routes>
     
    </div>
  );
}

export default App;
