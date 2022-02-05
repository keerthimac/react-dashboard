import './sidebar.css';
import { MdLineStyle,MdTimeline,MdTrendingUp } from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdLineStyle className='sidebarIcon'/>
              Home
            </li>
            <li className="sidebarListItem">
              <MdTimeline className='sidebarIcon'/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdTrendingUp className='sidebarIcon'/>
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
