import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "./layouts/UserLayout/UserLayout";
import { TestPage } from "./pages/TestPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { DescriptionChatBotPage } from "./pages/DescriptionChatBotPage/DescriptionChatBotPage";
import { DescriptionLayout } from "./layouts/DescriptionLayout/DescriptionLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import MainPage from "./pages/MainPage/MainPage";
import { ClubInfo } from "./pages/ClubInfo/ClubInfo";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout/>,
        children: [
            {index: true, element: <MainPage/>},
            {path: '*', element: <NotFoundPage/>},
            {path: 'club/:id', element: <ClubInfo/> },         
        ]
    },
    {
        path: '/description',
        element: <DescriptionLayout/>,
        children:[
            {index: true, element: <LandingPage/>},
            {path: '*', element: <NotFoundPage/>},
            {path: 'chatbot', element:<DescriptionChatBotPage/>}
        ]
    }
])

export default router;