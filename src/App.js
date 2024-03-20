/*
Created a Server
HMR - Hot Module Replacement
File Watcher algorithm- C++
BUNDLING
MINIFY
Cleaning our code
Dev and Production build
Super Fast build algorithm
Image optimization
Caching while developement
Compression
Compatible with older version of browser
port number
Consistent hashing
Zero Config
Tree Shaking- Removing un-wanted

*/
/*Transitive dependencies*/

// babel-plugin-transform-remove-console

/*header
          -Logo
          -Nav Items(right side)
          -Cart
      body
        -Searchbar
        -RestayrantList
          -RestaurantCard
            -Image
            -Name
            -Rating
            -Cusines
      footer
        -Links
        -*/

// import {createElement as ce} from 'react';

// const heading1 = React.createElement("h1",{
//   id:"title",
//   key:"h1"
// },"Heding1 from parcel");

// console.log(heading1);
// const heading2 = React.createElement("h2",{
//   id:"title",
//   key:"h2"
// },"Heding2");
// const container=React.createElement("div",{
//   id:"container"
// },[heading1,heading2]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(container);

// const aboutUs=React.createElement("li",{},"About Us");
// const support=React.createElement("li",{},"Support");
// const home=React.createElement("li",{},"Home");
// const uList=React.createElement("ul",{},[aboutUs,support,home]);
// const heading=React.createElement("h1",{},"Namaste React");
// const header=React.createElement("div",{class:"header"},[heading,uList]);

//Use JSX to refrain from the mess and complexity
//JSX ==> React.createElement => Object => HTML(DOM)
// const heading = (
//   <h1 id="title" key="h2" tabIndex="" className="">
//     Namaste React2
//   </h1>
// );

//React component
//-Functional
//-Class Based Component - OLD

//Name of component starts with capital letter
//component composition

//config Driven UI
//React.Fragment

// const HeaderComponent2 = () => (
//   <div>
//     <h1>Namaste React functional component</h1>
//     <h2>This is h2 tag</h2>
//   </div>
// );
// root.render(HeaderComponent());


//Chunking
//Code Splitting
//Dynamic Bundling
//Lazy Loading
//On Demand Loading
//Dynamic Import


import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";

const Instamart=lazy(()=>import("./components/Instamart"));
//Upon On Demand Loading -->> upon render --> suspend loading

const AppLayout = () => {
  return (
    <>
      <Header />
      {/*{Outlet} */}
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>,
      },
      {
        path:"/instamart",
        element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>,
      }
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
