import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-[80vh] w-full flex justify-center items-start mt-10 px-6">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-10">

          {/* Cart Items Section */}
          <div className="flex flex-col gap-6 flex-1">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3 p-6 border rounded shadow-md bg-white h-fit">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Your Cart</h2>
            <h3 className="text-2xl font-bold text-green-600 mb-4">SUMMARY</h3>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Total Items:</span> {cart.length}
            </p>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Total Amount : <span className="text-green-700">${totalAmount.toFixed(2)}</span>
            </p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
              Checkout Now
            </button>
          </div>

        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center">
          <h1 className="text-2xl font-semibold mb-4">Cart Empty</h1>
          <Link to="/">
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
