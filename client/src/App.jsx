import React from "react";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/footer";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Skill from "./pages/skill/Skill";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/add";
import Lessons from "./pages/lessons/Lessons";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MySkills from "./pages/mySkills/MySkills";
import "./App.scss";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
        <NavBar />
        <Outlet />
        <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/myskills",
          element: <MySkills />,
        },
        {
          path: "/lessons",
          element: <Lessons />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/skill/:id",
          element: <Skill />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
