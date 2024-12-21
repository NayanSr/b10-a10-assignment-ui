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
import UpdateVisa from "../components/UpdateVisa";

const router= createBrowserRouter([
    {path:'/',element:<HomeLayout/>, 
        children:[
            {path:'/', element:<Home/>},
            {path:'/allVisas', element:<AllVisas/>, loader:()=>fetch('http://localhost:5000/allVisa')},
            {path:'/addVisa', element:<AddVisa/>},
            {path:'/myAdded/:email', element:<MyAddedVisa/>,
                loader:({params})=>fetch(`http://localhost:5000/myAdded/${params.email}`)},
            {path:'/visaDetails/:id', element:<VisaDetails/>,loader:({params})=>fetch(`http://localhost:5000/allVisa/${params.id}`)},
            {path:'/updateVisa/:id', element:<UpdateVisa/>, loader: ({params})=>fetch(`http://localhost:5000/allVisa/${params.id}`)},
           
            {path:'/myApplications/:email', element:<MyVisaApplications/>, loader:({params})=>fetch(`http://localhost:5000/myApplied/${params.email}`)},
            {path:'/register', element:<Registration/>},
            {path:'/login', element:<Login/>},
    ]}
]);

export default router;