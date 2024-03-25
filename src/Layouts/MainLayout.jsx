import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import Home from "../Pages/Home";


const MainLayout = () => {
    return (
        <div>
            <div  className="h-20">
                <Nav></Nav>
            </div>
            <Outlet>
            <Home></Home>
            <Blogs></Blogs>
            <Bookmarks></Bookmarks>
            </Outlet>
        </div>
    );
};

export default MainLayout;