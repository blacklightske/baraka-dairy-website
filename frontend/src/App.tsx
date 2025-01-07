import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./layout/DefaultLayout";
import ProductPage from "./pages/ProductPage";
import { Provider } from "react-redux";
import { store } from "./app/Store";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DefaultDashboardLayout from "./admin/layout/DefaultDashboardLayout";
import AddProduct from "./admin/pages/AddProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewAllProducts from "./admin/pages/ViewAllProducts";
import HomeMain from "./pages/HomeMain";
import MilkRecordInputPage from "./admin/pages/AddMilkRec";
const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <HomeMain />
            </DefaultLayout>
          }
        />
        {/* market  */}
        <Route
          path="/market"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />

        <Route path="/product/:productId" element={<ProductPage />} />
        <Route
          path="/cart"
          element={
            <DefaultLayout>
              <Cart />
            </DefaultLayout>
          }
        />
        <Route
          path="/orders"
          element={
            <DefaultLayout>
              <Orders />
            </DefaultLayout>
          }
        />
        <Route
          path="/about"
          element={
            <DefaultLayout>
              <About />
            </DefaultLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <DefaultLayout>
              <Contact />
            </DefaultLayout>
          }
        />

        <Route path="/dashboard" element={<DefaultDashboardLayout />}>
          <Route path="add-product" element={<AddProduct />} />
          <Route path="all-products" element={<ViewAllProducts />} />
          <Route path="add-milk" element={<MilkRecordInputPage />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
