import { NavLink } from 'react-router-dom';
import { useMemo } from 'react';
import { SIDEBARMENUITEMS, IMPEKABLE } from '../../utils/constants';
import './Sidebar.css';

const Sidebar = () => {

  const memoizedMenuItems = useMemo(() => {
    return SIDEBARMENUITEMS.map((item) => (
      <NavLink
        key={item.id}
        to={item.to}
        className="sidebar-link"
        activeclassname="active-link"
      >
        <span className="icon">{item.icon}</span>
        <span>{item.label}</span>
      </NavLink>
    ));
  }, [SIDEBARMENUITEMS]);

  return (
    <div className="sidebar">
      <div className="sidebar-header">{IMPEKABLE}</div>
      <nav className="sidebar-nav">
        {memoizedMenuItems}
      </nav>
    </div>
  );
};

export default Sidebar;

