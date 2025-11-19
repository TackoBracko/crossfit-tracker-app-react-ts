import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Sigup";
import Home from "./pages/User/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="log-in" element={<Login />} />
      <Route path="sign-up" element={<Signup />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
