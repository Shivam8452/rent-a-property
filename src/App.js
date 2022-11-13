import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/about" exact element={<About />} />
					<Route path="/contact" exact element={<Contact />} />
				</Routes>
				<Footer/>
			</Router>
    </>
  );
}

export default App;
