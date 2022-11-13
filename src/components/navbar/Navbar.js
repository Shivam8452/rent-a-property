import React, { useState } from 'react';
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Navbar.css';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
        <div className='container'>
			<Link to="/">
				<img src={logo} alt="RAP" className='logo' />
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMenu}>
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMenu}>
						Properties
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						Contact
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/" className="btn btn-colour2" onClick={closeMenu}>
						Log In
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/" className="btn btn-colour1" onClick={closeMenu}>
						Sign Up
					</Link>
				</li>
			</ul>
            </div>
		</nav>
	);
};

export default Navbar;