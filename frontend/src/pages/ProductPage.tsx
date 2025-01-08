import { useEffect, useState } from "react";
import { NavbarHeader } from "../components/Navbar";
import SideView from "../components/SideView";
import { Badge, Button, Select } from "flowbite-react";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity, MdStars } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { ProductCard } from "../components/ProductCard";
import { FooterCBottom } from "../components/Footer";
import { useAppDispatch, useAppSelector } from "../app/hooks/redux-hooks";
import { useParams } from "react-router-dom";
import { ProductType } from "../types/types";
import {
  addProductToCart,
  removeProductFromCart,
} from "../app/slices/AppSlice";
import { FiDelete } from "react-icons/fi";
import API from "../api/api";

const ProductPage = () => {
  const { productId } = useParams();

  const dispatch = useAppDispatch();

  const { cartIds } = useAppSelector((state) => state.app);

  const [product, setProduct] = useState<ProductType | null>(null);
  const [similarProducts, setSimilarProducts] = useState<ProductType[]>([]);
  const getSingleProduct = async () => {
    const res = await API.get(`product/single`, {
      params: {
        slug: productId,
      },
    });
    setProduct(res.data.product);
    setSimilarProducts(res.data.similarProducts);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getSingleProduct();
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getSingleProduct();
  }, [productId]);
  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <NavbarHeader />

      <div className="grid grid-cols-10 pt-5">
        <SideView />
        <div className="col-span-8">
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-4">
              <div className="bg-white  flex gap-2 py-3 px-5">
                <img src={product?.cover_image} alt="" className="w-80 h-80 " />

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center my-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge className="rounded-none" color="info">
                        Official Store
                      </Badge>
                      <Badge className="bg-black text-white rounded-none">
                        Black Friday
                      </Badge>
                    </div>

                    <FaRegHeart className="text-xl text-red-500" />
                  </div>
                  <h1 className="pr-3 text-2xl font-bold ">{product?.name}</h1>

                  <div className="border-b">
                    <h3 className="text-xs">Category: {product?.category}</h3>
                  </div>

                  <h1 className="text-2xl font-semibold">
                    Ksh{" "}
                    {product?.price && Number(product.price).toLocaleString()}
                  </h1>

                  <span className="text-xs text-green-500">In Stock</span>

                  <h5 className="text-xs">
                    + shipping from KSh 69 to CBD - UON/Globe/Koja/River Road
                  </h5>

                  <div className="mb-2.5 mt-2.5 flex items-center">
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-3 mr-2 rounded  px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                      ({product?.rating?.count ?? 0} Verified Ratings)
                    </span>
                  </div>

                  <Button
                    onClick={() => {
                      const isAdded = cartIds.includes(product?._id ?? "0");
                      isAdded
                        ? dispatch(removeProductFromCart(product?._id))
                        : dispatch(addProductToCart(product));
                    }}
                    color={`${
                      cartIds.includes(product?._id ?? "0") ? "failure" : "info"
                    }`}
                    className={`rounded-none text-xs w-full`}
                  >
                    {cartIds.includes(product?._id ?? "0") ? (
                      <FiDelete className="mr-2 h-5 w-5" />
                    ) : (
                      <HiShoppingCart className="mr-2 h-5 w-5" />
                    )}
                    {cartIds.includes(product?._id ?? "0")
                      ? "REMOVE FROM CART"
                      : "ADD TO CART"}
                  </Button>

                  <div className="mt-3">
                    <h1>PROMOTIONS</h1>

                    <div className="flex gap-2 items-center mt-3">
                      <TbTruckDelivery className="text-2xl text-red-500" />
                      <span>
                        Free delivery for orders above Ksh 1999 in selected
                        major cities.
                      </span>
                    </div>

                    <div className="flex gap-2 items-center mt-3">
                      <MdStars className="text-2xl text-red-500" />
                      <span>Easy and safer payments via the JumiaPay App.</span>
                    </div>

                    <div className="flex gap-2 items-center mt-3">
                      <MdOutlineSecurity className="text-2xl text-red-500" />
                      <span>Ready for delivery between 23 December to 25</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 bg-white px-5 py-3">
                <h1 className="font-semibold underline text-2xl">
                  Product Description
                </h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.description ?? "",
                  }}
                />
              </div>

              <div className="bg-white py-3 mt-3 px-5">
                <h1 className="font-semibold">
                  Customers who viewed this also viewed
                </h1>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-x-1 gap-y-1 mt-3 ">
                  {similarProducts.slice(0, 4).map((pr, i) => {
                    return <ProductCard product={pr} key={i} />;
                  })}
                </div>
              </div>
            </div>

            <div className="bg-white py-3">
              <div className="border-b">
                <h1 className="text-sm p-2">DELIVERY & RETURNS</h1>
              </div>

              <div className="border-b pt-3">
                <h1 className="text-sm px-2 flex gap-2">
                  Baraka dairy <h1 className="text-green-500">Express</h1>
                </h1>
                <span className="text-xs px-2">
                  Express delivery in main cities.
                </span>
              </div>

              <div className="px-2 mt-3">
                <h1>Choose your location</h1>
                <div className="max-w-md mt-4">
                  <Select required>
                    <option>Select your country</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </Select>
                </div>
                <div className="max-w-md mt-4">
                  <Select required>
                    <option>CBD - UON/Globe/Koja/River</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SideView />
      </div>

      <div className="mt-5">
        <FooterCBottom />
      </div>
    </div>
  );
};

export default ProductPage;
