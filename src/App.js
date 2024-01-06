import logo from './logo.svg';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/auth/Login';
import MainState from './context/MainState';
import Welcome from './components/Welcome';
function App() {
  return (
    <>
      <MainState>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/welcome' element={<Welcome/>}/>
          </Routes>
        </BrowserRouter>
      </MainState>
    </>

  );
}

export default App;
