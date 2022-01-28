import logo from './logo.svg';
import './App.css';
import Home from './components/Body/Home';
import Livetv from './components/Body/Livetv';
import Trending from './components/Body/Trending';
import Aboutus from './components/Body/Aboutus';
import { Routes, Route } from 'react-router-dom'
import {GlobalProvider} from './components/Globalcontext/Contextapi'
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Trending' element={<Trending />} />
          <Route path='/Livetv' element={<Livetv />} />
          <Route path='/Aboutus' element={<Aboutus />} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
