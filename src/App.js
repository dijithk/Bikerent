import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Signup from './pages/Signup'
import Card from './pages/Card';
// import Bikes from './pages/Bikes';
import Admin from './components/Admin';
import Uploader from './pages/Uploader';
import Firstpage from './pages/Firstpage';

function App() {
  return (
    <div className="App">


      <Routes>

        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Auth></Auth>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/card' element={<Card></Card>}></Route>
        {/* <Route path='/bikes' element={<Bikes></Bikes>}></Route> */}
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/admincard' element={<Card admin></Card>}></Route>
        <Route path='/uploader' element={<Uploader></Uploader>}></Route>
        <Route path='/' element={<Firstpage></Firstpage>}></Route>
      </Routes>



    </div>
  );
}

export default App;
