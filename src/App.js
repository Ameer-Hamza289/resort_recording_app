// import logo from './logo.svg';

import './App.css';
import Home from './pages/Home';
import Room from './pages/Room';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Routes>
      <Route  exact path='/' element={<Home/>}/>
      <Route  exact path='/room/' element={<Room/>}/>
      <Route exact  path='/room/:slug' element={<SingleRoom/>}/>
      <Route  path='*' element={<Error/>}/>

      </Routes>

    </div>
  );
}

export default App;
//<img src={logo} className="App-logo" alt="logo" />
