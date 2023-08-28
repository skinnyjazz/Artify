import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";

import { router } from "./router/Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
