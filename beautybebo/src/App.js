import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Navbar from './navbar/Navbar';
import Resister from './Login-signup/Resister';
import Login from './Login-signup/Login';
import Loginform from './Login-signup/Loginform';
import Newcustomer from './Login-signup/Newcustomer';
import Allroutes from './routes/Allroutes';
import Makeup from './pages/Makeup';
import Skin from './pages/Skin';
import Shipping from './pages/Shipping';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Allroutes/>
    </div>
  );
}

export default App;
