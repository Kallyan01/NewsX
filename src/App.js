
import './App.css';
import Home from './components/Body/Home';
import Livetv from './components/Body/Livetv';
import Trending from './components/Body/Trending';
import Aboutus from './components/Body/Aboutus';
import { Routes, Route } from 'react-router-dom'
import { GlobalProvider } from './components/Globalcontext/Contextapi'
import Sports from './components/Body/Widgets/Catagory/Sports';
import Buisness from './components/Body/Widgets/Catagory/Buisness';
import Health from './components/Body/Widgets/Catagory/Health';
import Science from './components/Body/Widgets/Catagory/Science';
import Technology from './components/Body/Widgets/Catagory/Technology';
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='' element={ <Buisness/>} />
            <Route path='Entertainment' element={<Sports/>} />
            <Route path='Health' element={ <Health/>} />
            <Route path='Science' element={ <Science/>} />
            <Route path='Sports' element={ <Sports/>} />
            <Route path='Technology' element={<Technology/>} />
          </Route>
          <Route path='/Trending' element={<Trending />} />
          <Route path='/Livetv' element={<Livetv />} />
          <Route path='/Aboutus' element={<Aboutus />} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
