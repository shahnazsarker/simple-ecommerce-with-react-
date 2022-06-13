import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const{user, logOut} = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">E-Shop</NavLink>
                <NavLink to="/review"> Cart </NavLink>
                {/*<NavLink to="/inventory">Manage Inventory</NavLink>*/}
                {
                    user.email && <span style={{ color: 'white'}} > Hello {user.displayName} ! </span>
                }
                {
                    user.email ?
                        <button onClick={logOut}>Logout</button>

                        :
                    <NavLink to="/login">Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;