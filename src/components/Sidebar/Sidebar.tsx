import React from 'react';
import SidebarOpened from './SidebarOpened';
import SidebarClosed from './SidebarClosed'

function Sidebar() {

 return (
    <div className="Sidebar-btn">
        < SidebarOpened />
        < SidebarClosed />
    </div>
  );
}

export default Sidebar;
