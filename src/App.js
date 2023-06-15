import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { Cart } from "./pages/cart/Cart";
import { Product } from "./pages/product/Product";

function App() {
  const products = useSelector((state) => state.product.products);
  const totalItem = useSelector((state) => state.product.totalItem);
  const totalPrice = useSelector((state) => state.product.totalPrice);
  const dispatch = useDispatch();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
