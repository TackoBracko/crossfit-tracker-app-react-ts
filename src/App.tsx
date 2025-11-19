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
import Layout from "./components/Layout";
import { AuthProvider } from "./components/Context/AuthContext";
import { ProtectedRoutes, PublicRoutes } from "./components/Context/AuthRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route element={<PublicRoutes />}>
          <Route path="log-in" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route index element={<Home />} />
        </Route>
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path="on-bording" element={<Onbording />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
