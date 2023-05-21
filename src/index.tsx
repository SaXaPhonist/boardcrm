import { Layout } from 'pages/layout'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '../global.scss'
import { AddressSearch } from "pages/address-search/AddressSearch";
import { News } from "pages/news/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: '/',
      element: <News />
    },
      {
        path:'/address',
        element: <AddressSearch />
      }
    ]
  },
]);

const appContainer: HTMLElement = document.createElement("div");
appContainer.className = "app-container";
document.body.append(appContainer);
const root = createRoot(appContainer);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
