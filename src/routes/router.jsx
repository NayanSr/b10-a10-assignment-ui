import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Registration from "../components/Registration";
import Login from "../components/Login";
import Home from "../assets/pages/Home";
import AddVisa from "../assets/pages/AddVisa";
import AllVisas from "../assets/pages/AllVisas";
import VisaDetails from "../assets/pages/VisaDetails";
import MyAddedVisa from "../assets/pages/MyAddedVisa";
import MyVisaApplications from "../assets/pages/MyVisaApplications";

const router= createBrowserRouter([
    {path:'/',element:<HomeLayout/>, 
        children:[
            {path:'/', element:<Home/>},
            {path:'/allVisas', element:<AllVisas/>},
            {path:'/addVisa', element:<AddVisa/>},
            {path:'/myAdded', element:<MyAddedVisa/>},
            {path:'/visaDetails/:id', element:<VisaDetails/>},
            {path:'/myApplications', element:<MyVisaApplications/>},
            {path:'/register', element:<Registration/>},
            {path:'/login', element:<Login/>},
    ]}
]);

export default router;