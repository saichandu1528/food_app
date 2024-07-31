
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from "../Modal"
import Cart from "../screens/Cart"
import { useCart } from '../Component/ContextReducer';


function Navbar() {
  const navigate = useNavigate();
  let data = useCart();
  const[cartView,setCartView]=useState(false)
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fs-1 fst-italic">GoFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link to="/" className="nav-link active fs-5" aria-current="page">Home</Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link to="/myorder" className="nav-link active fs-5" aria-current="page">My Orders</Link>
                </li>
              ) : (
                <li className="nav-item">
                  <span className="nav-link active fs-5 text-danger"></span>
                </li>
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className='d-flex'>
                <Link to="/login" className="btn bg-white text-success mx-1 fs-5">Login</Link>
                <Link to="/createuser" className="btn bg-white text-success mx-1 fs-5">Signup</Link>
              </div>
            ) : (
              <div className='d-flex'>
                <div className="btn bg-white text-success mx-2" onClick={()=>{setCartView(true)}}>
                My Cart {" "}
                <Badge pill bg="danger">{data.length}</Badge>
                </div>
                {cartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
                <div className='btn bg-white text-danger mx-2 ' onClick={handleLogout}>Logout</div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
