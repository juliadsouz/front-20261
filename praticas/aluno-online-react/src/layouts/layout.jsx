import { Outlet } from "react-router";
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
    </div>
    )
}

export default Layout;