import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Registration from "../components/Registration";
import Login from "../components/Login";
import AddVisa from "../pages/AddVisa";
import AllVisas from "../pages/AllVisas";
import Home from "../pages/Home";
import MyVisaApplications from "../pages/MyVisaApplications";
import VisaDetails from "../pages/VisaDetails";
import MyAddedVisa from "../pages/MyAddedVisa";

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