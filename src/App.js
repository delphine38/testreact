import Docs from './components/Docs';
import Tuto from './components/Tuto';
import Community from './components/Community';
import Menu from './components/Menu';
import './App.css';
import react from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
            <Menu/>

  <BrowserRouter>
  <Routes>
        {/* <link to="/docs">Docs</link>  */}
  <Route path="/Docs" element={<Docs />} />
  <Route path="/Tuto" element={<Tuto />} />
  <Route path="/Community" element={<Community />} />

       
  </Routes>
  </BrowserRouter>
    </div>

  );
}

export default App;
