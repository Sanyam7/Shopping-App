
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex flex-col border-b pb-6">
      <div className="flex items-center gap-6 p-4 rounded-lg shadow-md bg-white">

        {/* Image */}
        <div className="w-32 flex-shrink-0">
          <img src={item.image} alt="Not found" className="w-full h-auto object-contain" />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
          <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-green-600 font-bold text-lg mt-2">${item.price}</p>

            {/* Delete button */}
            <button
              onClick={removeFromCart}
              className="text-red-500 hover:text-red-700 transition-transform duration-200 transform hover:scale-110"
              title="Remove from cart"
            >
              <MdDeleteOutline size={24} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
