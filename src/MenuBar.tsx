import React from 'react';
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
            <a href={item.link} className="menu-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
