import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeLayout = () => {
    return (
        <div className="box-border flex flex-col min-h-screen container mx-auto">
           <Header/>
           <div className="flex-grow">
            <Outlet/>
           </div>
           <Footer/>
        </div>
    );
};

export default HomeLayout;