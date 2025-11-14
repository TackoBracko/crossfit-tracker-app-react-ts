import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Sigup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="log-in" element={<Login />} />
      <Route path="sign-up" element={<Signup />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
