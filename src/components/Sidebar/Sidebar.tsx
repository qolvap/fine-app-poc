import React from 'react';
import { useGlobalContext } from '../context/Context';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function Sidebar() {
  const { isSideBarOpen, openSideBar, closeSideBar } = useGlobalContext();
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  const handleLinkClick = () => {
    closeSideBar();
  };

  return (
    <div>
      {isMobileOrTablet ? (
        <div>
          {isSideBarOpen ? (
            // Sidebar opened
                <div className='sidebar'>
                  <div className='Sidebar-btn flex justify-end m-5'>
                    <button className='close-btn' onClick={closeSideBar}>
                      <FaTimes className='text-3xl hover:text-blue-600' />
                    </button>
                  </div>
                      <div className='sidebar-header flex justify-end'>
                          <Link to='/' onClick={handleLinkClick} className='block py-2 px-3 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white border border-gray-300 rounded-md p-4 mb-5 mr-2'>
                            Główna
                          </Link>
                          <Link to='/Results' onClick={handleLinkClick} className='block py-2 px-3 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white border border-gray-300 rounded-md p-4 mb-5 mr-5'>
                            Wyszukiwarka
                          </Link>
                    </div>
                </div>
          ) : (
            // Sidebar closed
            <div className="Sidebar-btn flex justify-end m-5">
              <button className='sidebar-toggle ' onClick={openSideBar}>
                <FaBars className='text-3xl hover:text-blue-600'/>
              </button>
            </div>
          )}
        </div>
      ) : (
        // Desktop
        <div className='sidebar-header flex justify-center m-5 mb-12'>
          <Link to='/' onClick={handleLinkClick} className='block py-2 px-3 text-gray-500 hover:text-blue-600 dark:hover:text-white'>
            Główna
          </Link>
          <Link to='/Results' onClick={handleLinkClick} className='block py-2 px-3 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'>
            Wyszukiwarka
          </Link>
          <Link to='/Contact' onClick={handleLinkClick} className='block py-2 px-3 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'>
            Kontakt
          </Link>
        </div>
      )}
    </div>
  );
}

export default Sidebar;


