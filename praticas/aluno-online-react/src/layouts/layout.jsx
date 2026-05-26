import { Outlet } from "react-router";

import Sidebar from "../components/Sidebar";


function Layout() {
    return (
    <div className='center'>

        <aside>
            <Sidebar/>
     </aside>
        
            <Outlet/>
    
    </div>
    )
}

export default Layout;