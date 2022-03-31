import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./components/Homepage/Homepage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import AddToCart from "./components/addToCart/AddToCart";

function App() {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/add-to-cart" element={<AddToCart />} />
            <Route
              path="/product/:productId"
              exact
              element={<ProductDetails />}
            />
            <Route>404 Not Found!</Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
