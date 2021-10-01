import { Link } from "react-router-dom";
import { IoIosHome, IoIosPerson, IoIosArchive } from 'react-icons/io';
import './sidebar.css'

const Sidebar = () => {

    const size = 32

    return (
        <div className='Nav-sidebar'>
            <div className='Nav-sidebar-background'>
                <SidebarItem link_to='/' icon={<IoIosHome size={size} />} />
                <SidebarItem link_to='/pieces' icon={<IoIosArchive size={size} />} />
                <SidebarItem link_to='/composers' icon={<IoIosPerson size={size} />} />
            </div>
        </div>
    )
};

const SidebarItem = (props) => {
    return (
        <Link to={props.link_to}>
            <div className='Nav-sidebar-item'>
                {props.icon}
            </div >
        </Link>
    )
};

export default Sidebar;