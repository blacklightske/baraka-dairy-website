import { useAppDispatch, useAppSelector } from "../app/hooks/redux-hooks";
import { Button } from "flowbite-react";
import { removeProductFromCart } from "../app/slices/AppSlice";
import { CheckoutPopup } from "../components/CheckoutPopup";
import { useState } from "react";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.app);

  const getTotalAmount = () => {
    const total = cart.reduce((a, t) => a + Number(t.price), 0);
    return total.toLocaleString();
  };

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="py-14">
      <CheckoutPopup
        openModal={openModal}
        setOpenModal={setOpenModal}
        total={getTotalAmount()}
      />
      <div className="pb-4 border-b flex justify-between items-center">
        <h1 className="text-3xl">Your Shopping Cart</h1>
        {cart.length > 0 && (
          <Button onClick={() => setOpenModal(true)}>
            Checkout( Ksh.{getTotalAmount()})
          </Button>
        )}
      </div>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20">
          <h2>Your Cart is Empty</h2>
          <img
            src="https://3ec40e103fd1581afe048c3ca1d8d9c4.cdn.bubble.io/f1725529857594x125048921830299020/image%2037.svg"
            alt=""
            className="w-48"
          />
        </div>
      )}

      {cart.length > 0 && (
        <div className="bg-white px-10 py-10">
          <div className="">
            <h2>Cart({cart.length})</h2>
          </div>
          {cart.map((c, i) => {
            return (
              <div
                key={i}
                className="p-8 border-b flex justify-between items-start"
              >
                <div className="flex gap-10 ">
                  <img src={c.cover_image} alt="" className="w-20" />
                  <div>
                    <h2 className="text-2xl">{c.name}</h2>
                    <p className="text-xs text-red-700">Few Units Left</p>
                    <h2>
                      GREEN RE-USE{" "}
                      <span className="text-green-500">Express</span>
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-5">
                  <h2 className="text-2xl">
                    Ksh {Number(c.price).toLocaleString()}
                  </h2>
                  <Button
                    onClick={() => dispatch(removeProductFromCart(c._id))}
                    color="red"
                  >
                    Remove From Cart
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
