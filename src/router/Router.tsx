import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Children } from "react";
import Gallery from "../components/gallery/Gallery";
import PhotoPage from "../pages/PhotoPage";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <PhotoPage />,
      },
    ],
  },
]);
