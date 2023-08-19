import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./components/App";
import List from "./pages/List";
import NoMatch from "./pages/NoMatch";
import './resources/Starjout.ttf';
import './resources/Exo2-Light.ttf';
import './resources/Exo2-Medium.ttf';
import './resources/Exo2-ExtraBold.ttf';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {queries: {refetchOnWindowFocus: false}}
});
let router = createBrowserRouter([{
    path: "/",
    Component: App,
    children: [
        {
            index: true,
            Component: List,
        },
        {
            path: "*",
            Component: NoMatch,
        }
    ]
}]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
);