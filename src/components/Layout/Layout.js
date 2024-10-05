import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { SearchInput } from "../SearchInput/SearchInput";
import './Layout.css';

export const Layout = () => {
  return (
    <div className='layout-container'>
      <Sidebar />
      
      <div style={{ flex: 1}}>
        <SearchInput />
        <div className='outlet-container'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};