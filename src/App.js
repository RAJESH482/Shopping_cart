import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./components/productListing";
import ProductDetails from "./components/productDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={ProductListing} />
          <Route path="/product/:productId" exact Component={ProductDetails} />
          <Route>404 Not Found.!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
