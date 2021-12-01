import Docs from './components/Docs';
import Tuto from './components/Tuto';
import Community from './components/Community';
import Menu from './components/Menu';
import './App.css';
import react from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
<BrowserRouter>

      <Menu/>
      {/* <link to="/docs">Docs</link>  */}
{/* <Route path="/ocs" component={Docs} /> */}
      <Docs />
      <Tuto/>
      <Community/>

</BrowserRouter>
  );
}

export default App;
