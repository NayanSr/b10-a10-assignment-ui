import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Registration from "../components/Registration";
import Login from "../components/Login";
import AllVisas from "../components/AllVisas";
import AddVisa from "../components/AddVisa";
import MyAddedVisas from "../components/MyAddedVisas";
import MyVisaApplications from "../components/MyVisaApplications";

const router= createBrowserRouter([
    {path:'/',element:<HomeLayout/>, 
        children:[
            {path:'/', element:<h2>Here will be home component</h2>},
            {path:'/allVisas', element:<AllVisas/>},
            {path:'/addVisa', element:<AddVisa/>},
            {path:'/myAdded', element:<MyAddedVisas/>},
            {path:'/myApplications', element:<MyVisaApplications/>},
            {path:'/register', element:<Registration/>},
            {path:'/login', element:<Login/>},
    ]}
]);

export default router;