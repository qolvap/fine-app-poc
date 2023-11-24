import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/Context';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const SidebarClosed: React.FC = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext();

  const handleLinkClick = () => {
    closeSideBar();
  };

  return (
    <aside className={`${isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <button className='close-btn' onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <div className='sidebar-header'>
        <Link to='/' onClick={handleLinkClick}>
          Glowna
        </Link>
        <Link to='/Results' onClick={handleLinkClick}>
          Result
        </Link>
      </div>
    </aside>
  );
};

export default SidebarClosed;
