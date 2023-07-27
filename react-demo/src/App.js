import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from '../src/component/Login'
import Registration from './component/Login/Registration';
import Dashboard from './component/Login/Dashboard';
import './App.css';

const App=()=>(
  <BrowserRouter>
  <Routes>
    <Route path='/login' Component={Login}/>
    <Route path='/registration' Component={Registration}/>
    <Route path='/' Component={Dashboard}/>
    </Routes>
  </BrowserRouter>
  )

export default App;
