import Layout from "./components/Layout/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/authSlice";
import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const CollectionsPage = React.lazy(() => import("./pages/CollectionsPage"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));
function App() {
  const dispatch = useDispatch();
  const isloggedin = useSelector((state) => state.auth.isLoggedin);
  const user = JSON.parse(localStorage.getItem("userData"));
  if (user) {
    dispatch(authActions.login({ ...user }));
  }
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
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
              !isloggedin ? (
                <RegisterPage />
              ) : (
                <Navigate to="/" replace={true} />
              )
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
