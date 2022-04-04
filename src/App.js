import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Pagenotfound from './Components/Notfoundpage/Pagenotfound';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App flex">
    <Header/>
    <div className='p-7 w-full h-screen bg-gray-200'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
    </div>

    </div>
  );
}

export default App;
