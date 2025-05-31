import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "./layouts/UserLayout/UserLayout";
import { TestPage } from './pages/TestPage/TestPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { DescriptionChatBotPage } from "./pages/DescriptionChatBotPage/DescriptionChatBotPage";
import { DescriptionLayout } from "./layouts/DescriptionLayout/DescriptionLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import MainPage from "./pages/MainPage/MainPage";
import { ClubInfo } from "./pages/ClubInfo/ClubInfo";
import GraphPage from "./pages/GraphPage/GraphPage";

const router = createBrowserRouter([
    {
        path: '/main',
        element: <UserLayout/>,
        children: [
            {index: true, element: <MainPage/>},
            {path: '*', element: <NotFoundPage/>},
            {path: 'club/:id', element: <ClubInfo/> },
            {path: 'graph', element: <GraphPage/> },
        ]
    },
    {
        path: '/',
        element: <DescriptionLayout/>,
        children:[
            {index: true, element: <DescriptionChatBotPage/>},
            {path: '*', element: <NotFoundPage/>},
        ]
    }
])

export default router;