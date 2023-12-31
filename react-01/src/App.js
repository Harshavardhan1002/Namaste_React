import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error"
import MenuCard from "./Components/MenuCard";
import UserContext from "./utils/UserContext";
// import Grocery from "./Components/Grocery";

const Grocery = lazy(() => import("./Components/Grocery"))
const AppLayout = () => {
  const [userName, setUsername] = useState();
  return (
    <div className="app">
      <UserContext.Provider value={{loggedInUser: userName ,setUsername}}>
      <Header/>
      <Outlet/>
      </UserContext.Provider>
    </div>
  )
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
      {
        path: "/contact",
        element: <ContactUs/>
      },
    {
      path: "/grocery",
      element: <Suspense fallback = {<h1>Loading....</h1>
      }><Grocery/></Suspense>
    },
    {
      path: "/restuarants/:resId",
      element: <MenuCard/>
    }
    ],
    errorElement: <Error/>
  },
])
const page = ReactDOM.createRoot(document.getElementById("root"));
page.render(<RouterProvider router={appRouter}/>);
