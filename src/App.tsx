import "./styles/index.scss";

import { Outlet } from "react-router";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { Header } from "./components/Header/Header";

const App = () => {
  useScrollToTop();
  return (
    <div className="App">
      {/* <Header /> */}
      <Outlet />
    </div>
  );
};

export default App;
