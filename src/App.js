import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Homepage from "./components/Homepage/Homepage";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
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