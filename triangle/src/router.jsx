import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "./layouts/UserLayout/UserLayout";
import { TestPage } from "./pages/TestPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { DescriptionChatBotPage } from "./pages/DescriptionChatBotPage/DescriptionChatBotPage";
import { DescriptionLayout } from "./layouts/DescriptionLayout/DescriptionLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout/>,
        children: [
            {index: true, element: <TestPage/>},
            {path: '*', element: <NotFoundPage/>},
            {path: 'main', element: <TestPage/>},
            {path: 'detail', element: <TestPage/>},
         
        ]
    },
    {
        path: '/description',
        element: <DescriptionLayout/>,
        children:[
            {index: true, element: <TestPage/>},
            {path: '*', element: <NotFoundPage/>},
            {path: 'chatbot', element:<DescriptionChatBotPage/>}
        ]
    }
])

export default router;