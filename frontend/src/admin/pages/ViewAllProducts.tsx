import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/redux-hooks";
import { AdminProductCard } from "../components/AdminProductCard";
import { getProductsService } from "../../app/services/product-service";

const ViewAllProducts = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.dashboard);

  const getAllProducts = async () => {
    await dispatch(getProductsService());
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-3 gap-5">
        {products.map((b, i) => {
          return <AdminProductCard product={b} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ViewAllProducts;
