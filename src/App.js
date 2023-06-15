import { useDispatch, useSelector } from "react-redux";
import { Product } from "./components/Product";
import { addproduct, removeproduct } from "./rtk/product/productSlice";

function App() {
  const products = useSelector((state) => state.product.products);
  const totalItem = useSelector((state) => state.product.totalItem);
  const totalPrice = useSelector((state) => state.product.totalPrice);
  const dispatch = useDispatch();
  return (
    <div>
      <div class="bg-gray-50 h-full md:h-screen">
        <div class="grid place-items-center">
          <h1 class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Shopping Cart
          </h1>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            {products.map((product) => {
              return <Product product={product}></Product>;
            })}
          </div>
          <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              {products.map((product) => {
                return (
                  <div class="flex justify-between border-b-2 mb-2">
                    <div class="text-lg py-2">
                      <p>{product.name}</p>
                    </div>
                    <div class="text-lg py-2">
                      <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                        <button
                          class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                          onClick={() =>
                            product.count > 0 &&
                            dispatch(removeproduct(product.id))
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M18 12H6"
                            />
                          </svg>
                        </button>
                        <p>{product.count}</p>
                        <button
                          class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                          onClick={() =>
                            product.quantity > 0 &&
                            dispatch(addproduct(product.id))
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div class="flex justify-center items-center text-center">
                <div class="text-xl font-semibold">
                  <p>Total Item</p>
                  <p class="text-5xl">{totalItem}</p>
                </div>
              </div>
            </div>
            <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <div class="flex justify-center items-center text-center">
                <div class="text-xl font-semibold">
                  <p>Total Price</p>
                  <p class="text-5xl">{totalPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
