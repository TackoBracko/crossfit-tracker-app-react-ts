import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Sigup";
import Home from "./pages/User/Home";
import Onbording from "./pages/Sigup/Onbording";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="log-in" element={<Login />} />
      <Route path="sign-up" element={<Signup />} />
      <Route path="on-bording" element={<Onbording />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
