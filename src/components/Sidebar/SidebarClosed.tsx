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
    <aside className={`sidebar ${isSideBarOpen ? 'show-sidebar' : ''}`}>
    <div className='sidebar-header'>
      <button className='close-btn' onClick={closeSideBar}>
        <FaTimes className='hover:text-blue-600' />
      </button>
    </div>
    <div className='sidebar-header'>
      <Link to='/' onClick={handleLinkClick} className='block py-2 px-3 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'>
        Główna
      </Link>
      <Link to='/Results' onClick={handleLinkClick} className='block py-2 px-3 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'>
        Wyszukiwarka
      </Link>
    </div>
  </aside>
  
  );
};

export default SidebarClosed;
