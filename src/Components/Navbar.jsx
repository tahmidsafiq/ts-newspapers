import React, { useState } from 'react';

const Navbar = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item ${activeCategory === 'technology' ? 'active' : ''}`}>
              <div className="nav-link" onClick={() => handleCategoryClick('technology')}>
                Technology
              </div>
            </li>
            <li className={`nav-item ${activeCategory === 'business' ? 'active' : ''}`}>
              <div className="nav-link" onClick={() => handleCategoryClick('business')}>
                Business
              </div>
            </li>
            <li className={`nav-item ${activeCategory === 'health' ? 'active' : ''}`}>
              <div className="nav-link" onClick={() => handleCategoryClick('health')}>
                Health
              </div>
            </li>
            <li className={`nav-item ${activeCategory === 'science' ? 'active' : ''}`}>
              <div className="nav-link" onClick={() => handleCategoryClick('science')}>
                Science
              </div>
            </li>
            <li className={`nav-item ${activeCategory === 'sports' ? 'active' : ''}`}>
              <div className="nav-link" onClick={() => handleCategoryClick('sports')}>
                Sports
              </div>
            </li>
            <li className={`nav-item ${activeCategory === 'entertainment' ? 'active' : ''}`}>
              <div className="nav-link" onClick={() => handleCategoryClick('entertainment')}>
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
