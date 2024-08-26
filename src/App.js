
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Campamentos from './routes/Campamentos';
import Bootcamps from './routes/Bootcamps';
import Boletin from './routes/Boletin';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/campamentos" element={<Campamentos/>}/>
        <Route path="/bootcamps" element={<Bootcamps/>}/>
        <Route path="/boletin" element={<Boletin/>}/>
      </Routes>

      
      

      
    </div>
  );
}

export default App;
