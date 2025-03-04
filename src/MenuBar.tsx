import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './MenuBar.css'; // Import the CSS file

interface MenuItem {
  label: string;
  link: string;
}

interface MenuBarProps {
  items: MenuItem[];
}

const MenuBar: React.FC<MenuBarProps> = ({ items }) => {
  return (
    <nav className="menu-bar">
      <ul className="menu-list">
        {items.map((item, index) => (
          <li key={index} className="menu-item">
            <Link to={item.link} className="menu-link"> {/* ✅ Use Link instead of <a> */}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
