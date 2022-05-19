import Layout from "./components/Layout/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/authSlice";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import CollectionsPage from "./pages/CollectionsPage";
import ProductPage from "./pages/ProductPage";
function App() {
  const dispatch = useDispatch();
  const isloggedin = useSelector((state) => state.auth.isLoggedin);
  console.log(isloggedin);
  const user = JSON.parse(localStorage.getItem("userData"));
  if (user) {
    dispatch(authActions.login({ ...user }));
  }
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            !isloggedin ? <LoginPage /> : <Navigate to="/" replace={true} />
          }
        />
        <Route
          path="/register"
          element={
            !isloggedin ? <RegisterPage /> : <Navigate to="/" replace={true} />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
