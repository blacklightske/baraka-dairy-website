import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/Store";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { ProtectedRoute, PublicRoute } from "./components/RouteGuards";
import DefaultLayout from "./layout/DefaultLayout";
import Cart from "./pages/Cart";
// import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DefaultDashboardLayout from "./admin/layout/DefaultDashboardLayout";
import MilkRecordInputPage from "./admin/pages/AddMilkRec";
import AddProduct from "./admin/pages/AddProduct";
import ViewAllProducts from "./admin/pages/ViewAllProducts";
import HomeMain from "./pages/HomeMain";
import LoginPage from "./pages/LoginUser";
import SignupPage from "./pages/RegisterUser";

const App = () => (
  <Provider store={store}>
    <ToastContainer />
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        }
      />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DefaultLayout>
              <HomeMain />
            </DefaultLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DefaultDashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="add-product" element={<AddProduct />} />
        <Route path="all-products" element={<ViewAllProducts />} />
        <Route path="add-milk" element={<MilkRecordInputPage />} />
      </Route>

      {/* Protected Routes with DefaultLayout */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <DefaultLayout>
              <Cart />
            </DefaultLayout>
          </ProtectedRoute>
        }
      />
      <Route path="/product/:productId" element={<ProductPage />} />
       
      <Route
        path="/market"
        element={
          <ProtectedRoute>
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <DefaultLayout>
              <About />
            </DefaultLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <DefaultLayout>
              <Contact />
            </DefaultLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  </Provider>
);

export default App;
