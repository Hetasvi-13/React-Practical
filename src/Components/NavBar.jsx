import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

function NavBar() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 flex justify-center gap-8">
        <Link to="/" className="text-white font-bold hover:text-yellow-300">
          Home
        </Link>

        <Link to="/about" className="text-white font-bold hover:text-yellow-300">
          About
        </Link>

        <Link to="/contact" className="text-white font-bold hover:text-yellow-300">
          Contact
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="text-center mt-16">
              <h1 className="text-4xl font-bold text-blue-600">Home Page</h1>
              <p className="text-gray-600 mt-4 text-lg">
                Welcome to our React application!
              </p>
            </div>
          }
        />

        <Route
          path="/about"
          element={
            <div className="text-center mt-16">
              <h1 className="text-4xl font-bold text-green-600">About Page</h1>
              <p className="text-gray-600 mt-4 text-lg">
                Learn more about us.
              </p>
            </div>
          }
        />

        <Route
          path="/contact"
          element={
            <div className="text-center mt-16">
              <h1 className="text-4xl font-bold text-purple-600">
                Contact Page
              </h1>
              <p className="text-gray-600 mt-4 text-lg">
                Contact us for more information.
              </p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default NavBar;