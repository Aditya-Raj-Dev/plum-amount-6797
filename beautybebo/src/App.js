import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Navbar from './navbar/Navbar';
import Resister from './Login-signup/Resister';
import Login from './Login-signup/Login';
import Loginform from './Login-signup/Loginform';
import Newcustomer from './Login-signup/Newcustomer';

function App() {
  return (
    <div className="App">
      <Navbar/>
  
   <Login/>
    </div>
  );
}

export default App;
