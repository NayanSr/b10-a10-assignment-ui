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
import PrivateRoute from "../components/PrivateRoute";
import Error from "../components/Error";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart";
import Profile from "../pages/Profile";
import Requirements from "../pages/Requirements";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home />,
        // loader: ()=>fetch('http://localhost:5000/latestVisa')
        loader: ()=>fetch('https://b10a10-server-eight.vercel.app/latestVisa')
       },
      {
        path: "/allVisas",
        element: <AllVisas />,
        loader: () => fetch("https://b10a10-server-eight.vercel.app/allVisa"),
      },
      { path: "/addVisa", element: <PrivateRoute><AddVisa /></PrivateRoute> },
      { path: "/requirements", element: <Requirements/> },
      {
        path: "/myAdded/:email",
        element: <PrivateRoute>
            <MyAddedVisa />
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://b10a10-server-eight.vercel.app/myAdded/${params.email}`),
      },
      {
        path: "/visaDetails/:id",
        element: (
          <PrivateRoute>
            <VisaDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://b10a10-server-eight.vercel.app/allVisa/${params.id}`),
      },
      {
        path: "/updateVisa/:id",
        element: <UpdateVisa />,
        loader: ({ params }) =>
          fetch(`https://b10a10-server-eight.vercel.app/${params.id}`),
      },

      {
        path: "/myApplications/:email",
        element: <PrivateRoute>
            <MyVisaApplications />
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://b10a10-server-eight.vercel.app/myApplied/${params.email}`),
      },
      { path: "/register", element: <Registration /> },
      { path: "/login", element: <Login /> },
     
    ],
  },
  {
    path:"dashboard",
    element:<Dashboard/>,
    children:[
      {path:"addVisa", element:<PrivateRoute><AddVisa /></PrivateRoute>},
      {path:"profile", element: <Profile/>},
      {path: "myAdded/:email",
        element: <PrivateRoute>
            <MyAddedVisa />
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://b10a10-server-eight.vercel.app/myAdded/${params.email}`)},
        {
        path: "myAdded/:email",
        element: <PrivateRoute>
            <MyAddedVisa />
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://b10a10-server-eight.vercel.app/myAdded/${params.email}`),
      },
      {
        path: "myApplications/:email",
        element: <PrivateRoute>
            <MyVisaApplications />
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://b10a10-server-eight.vercel.app/myApplied/${params.email}`),
      },
    ]
  },


  {path:'*', element:<Error/>}
]);

export default router;
