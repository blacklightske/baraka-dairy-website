import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { setProductsReducer } from "../app/slices/AppSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks/redux-hooks";
import API from "../api/api";

const Home = () => {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.app);

  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await API.get("product");
      localStorage.setItem("products", JSON.stringify(res.data.products));
      dispatch(setProductsReducer(res.data.products));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {/* <HomeCoursel /> */}
      <div className="bg-black flex justify-between py-3 px-6 text-white mt-1 mb-1">
        <h2>Daily Finds</h2>
        <Link to={"#"}>
          <h2>See All</h2>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2">
        <img
          src="https://img.freepik.com/free-psd/full-grown-tomatoes-banner-template_23-2148428214.jpg?t=st=1733714669~exp=1733718269~hmac=e3faf08d2eab6993f006a0b8b4f30c5271c83e07401834b9309fb09f70be805b&w=2000"
          alt=""
        />
        <img
          src="https://img.freepik.com/free-psd/lifestyle-template-design_23-2151144222.jpg?t=st=1733714717~exp=1733718317~hmac=9f8147199f8e52a7b2e3ea738b26595e0e8c7ede142e4f18ae92595267e69939&w=2000"
          alt=""
        />
        <img
          src="https://img.freepik.com/free-psd/take-care-plants-horizontal-banner-with-leaves_23-2149378886.jpg?t=st=1733714739~exp=1733718339~hmac=3a9141d5733b512a600e43c905c02412e1d438778abbfcdd1e7168d117728c82&w=2000"
          alt=""
        />
        <img
          src="https://img.freepik.com/free-psd/organic-gardening-banner-template-with-photo_23-2148509957.jpg?t=st=1733714763~exp=1733718363~hmac=2b938d7d3ec1b42098db0595fab74997f0475ad7935654bd3452d464df521f08&w=2000"
          alt=""
        />
      </div>

      {loading && (
        <Card className="flex justify-center items-center">
          <div
            className="animate-spin h-12 w-12 text-center rounded-full border-4 border-gray
          border-t-4 border-t-green-400"
          ></div>
        </Card>
      )}

      <div className="bg-green-700 flex justify-between py-3 px-6 text-white mt-1 mb-1">
        <h2>You may also like</h2>
        <Link to={"#"}>
          <h2>See All</h2>
        </Link>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-x-1 gap-y-1 pb-10 ">
        {products &&
          products.map((product, i) => {
            return <ProductCard key={i} product={product} />;
          })}
      </div>
    </div>
  );
};

export default Home;
