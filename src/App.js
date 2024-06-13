import logo from './logo.svg';
import './App.css';
import Sign from './components/Sign';
import Up from './components/Up';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign/>}/>
        <Route path='/signup' element={<Up/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
