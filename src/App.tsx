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
import Profile from "./pages/User/Profile";
import Edit from "./pages/User/Profile/Edit";
import CategoriesList from "./pages/Movements/CategoriesList";
import ExercisesList from "./pages/Movements/Exercises/index.tsx";
import { AuthProvider } from "./components/Context/AuthContext";
import { ProtectedRoutes, PublicRoutes } from "./components/Context/AuthRoutes";
import { UserDataProvider } from "./components/Context/UserContext";

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
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path="on-bording" element={<Onbording />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/categories/:categoryId" element={<ExercisesList />} />
        <Route path="/edit" element={<Edit />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <AuthProvider>
      <UserDataProvider>
        <RouterProvider router={router} />
      </UserDataProvider>
    </AuthProvider>
  );
}

export default App;
