import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Blogs from "../Pages/Blogs";


const MainLayout = () => {
    return (
        <div>
            <div className="h-20">
                <Nav></Nav>
            </div>
            <div className="min-h-[calc(100vh-55px)]">
            <Outlet></Outlet>
            </div>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;