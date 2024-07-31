import './App.css';
import Home from './screens/Home'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Login from './screens/Login';
import Signup from'./screens/Signup';
import { CartProvider } from './Component/ContextReducer';
import MyOrders from "./screens/MyOrders";
function App() {
  return (
    <CartProvider>

    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/createuser" element={<Signup/>}/>
        <Route path="/myorder" element={<MyOrders/>}/>


      </Routes>
  
    </div>
    </Router>
    </CartProvider>
      
  );
}

export default App;
