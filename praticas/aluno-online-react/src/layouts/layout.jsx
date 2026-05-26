import { Outlet } from "react-router";
<<<<<<< HEAD
import Sidebar from "../components/Sidebar";

function Layout() {
    return (
        <div className="layout">
        <aside>
            <Sidebar/>
        </aside>
        <main>
            <Outlet/>
        </main>
=======

import Sidebar from "../components/Sidebar";


function Layout() {
    return (
    <div className='center'>

        <aside>
            <Sidebar/>
     </aside>
        
            <Outlet/>
    
>>>>>>> 1045f888627589664d474f45a84692171b3c9ec5
    </div>
    )
}

export default Layout;