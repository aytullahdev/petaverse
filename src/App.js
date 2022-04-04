import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Pagenotfound from './Components/Notfoundpage/Pagenotfound';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import Articles from './Components/Articles/Articles';
function App() {
  return (
    <div className="App flex relative">
    <Header/>
    <div className='p-2 w-full overflow-y-hidden  bg-white'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/blogs' element={<Articles/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
    </div>

    </div>
  );
}

export default App;
