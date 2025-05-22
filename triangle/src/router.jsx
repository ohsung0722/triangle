import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "./layouts/UserLayout";
import { TestPage } from "./pages/TestPage";
import { NotFoundPage } from "./pages/NotFoundPage";

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
    }
])

export default router;