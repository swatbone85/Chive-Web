import { Link } from "react-router-dom";
import { IoIosHome, IoIosPerson, IoIosArchive } from 'react-icons/io';
import './sidebar.css'
import { useLocation } from 'react-router'

const Sidebar = () => {
    const { pathname } = useLocation()


    console.log(pathname)
    const size = 32

    return (
        <div className='Nav-sidebar'>
            <div className='Nav-sidebar-background'>
                <SidebarItem to='/'  className={pathname === "/" ? 'active' : ''}  icon={<IoIosHome size={size} />} />
                <SidebarItem to='/pieces'  className={pathname.startsWith("/pieces") ? 'active' : ''} icon={<IoIosArchive size={size} />} />
                <SidebarItem to='/composers'  className={pathname.startsWith("/composers") ? 'active' : ''} icon={<IoIosPerson size={size} />} />
            </div>
        </div>
    )
};

const SidebarItem = ({icon, ...rest}) => {
    return (
        <Link {...rest}>
            <div className='Nav-sidebar-item'>
                {icon}
            </div >
        </Link>
    )
};

export default Sidebar;