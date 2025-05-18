import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

const HomeLayout = () => {
    return (
        <div className=" flex flex-col min-h-screen  mx-auto">
         <Header/>
           <div className="flex-grow lg:w-[1400px] mx-auto bg-slate-400">
            <Outlet/>
           </div>
           <div className="">
            <Footer />
           </div>
        </div>
    );
};

export default HomeLayout;