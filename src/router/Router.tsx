import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import PhotoPage from "../pages/PhotoPage";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/Artify",
    element: <App />,
    children: [
      {
        path: "/Artify",
        element: <Home />,
      },
      {
        path: "/Artify/:id",
        element: <PhotoPage />,
      },
    ],
  },
]);


// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/:id",
//         element: <PhotoPage />,
//       },
//     ],
//   },
// ]);
