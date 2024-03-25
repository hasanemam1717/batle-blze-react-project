import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div  className="h-20">
                <Nav></Nav>
            </div>
            <div className="min-h-screen">
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;