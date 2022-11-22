import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import CreateAccount from "./page/CreateAccount";
import Login from "./page/Login";
import Home from "./page/Home";
import ProductDetail from "./page/ProductDetail";
import Description from "./ui/Description";
import Cart from "./page/Cart";
import { useEffect } from "react";
import axios from "axios";
function App() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(0);
  const [productPerPage, setProductPerPage] = useState(6);
  const [brands, setBrands] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [value, setValue] = useState([minPrice, maxPrice]);

  const searchProduct = async () => {
    const res = await axios.get(
      `https://kevine-commerce.herokuapp.com/products?q=${search}&category=${category}&limit=${productPerPage}`,
      { withCredentials: true }
    );
    setProducts(res.data);
  };

  const categoryFilter = async (category) => {
    const res = await axios.get(
      `https://kevine-commerce.herokuapp.com/products?category=${category}&min=${value[0]}&max=${value[1]}&limit=${productPerPage}`,
      { withCredentials: true }
    );
    setProducts(res.data);
  };

  const searchCategory = async () => {
    const res = await axios.get(
      `https://kevine-commerce.herokuapp.com/products?category=${category}`,
      { withCredentials: true }
    );
    setProducts(res.data);
  };

  const checkboxFilter = async () => {
    const res = await axios.get(
      `https://kevine-commerce.herokuapp.com/products?category=${category}&brand=${brands}&min=${value[0]}&max=${value[1]}&limit=${productPerPage}`,
      { withCredentials: true }
    );

    setProducts(res.data);
  };

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        `https://kevine-commerce.herokuapp.com/products?p=${page}&limit=${productPerPage}`
      );
      setProducts(res.data);
    };
    getProduct();
  }, []);

  useEffect(() => {
    const getLoginData = async () => {
      await axios
        .get("https://kevine-commerce.herokuapp.com/login/success", {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data);
        });
    };
    getLoginData();
  }, []);

  const showPageProduct = async () => {
    const res = await axios.get(
      `https://kevine-commerce.herokuapp.com/products?q=${search}&category=${category}&p=${page}&limit=${productPerPage}`,
      { withCredentials: true }
    );
    setProducts(res.data);
  };

  const showProductPerPage = async () => {
    const res = await axios.get(
      `https://kevine-commerce.herokuapp.com/products?q=${search}&category=${category}&brand=${brands}&min=${value[0]}&max=${value[1]}&limit=${productPerPage}`,
      { withCredentials: true }
    );
    setProducts(res.data);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/createAccount"
          element={user ? <Navigate to={"/login"} /> : <CreateAccount />}
        />
        <Route
          path="/Login"
          element={user ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              user={user}
              products={products}
              searchCategory={searchCategory}
              category={category}
              setCategory={setCategory}
              categoryFilter={categoryFilter}
              showPageProduct={showPageProduct}
              setPage={setPage}
              setProductPerPage={setProductPerPage}
              showProductPerPage={showProductPerPage}
              searchProduct={searchProduct}
              checkboxFilter={checkboxFilter}
              setBrands={setBrands}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              maxPrice={maxPrice}
              minPrice={minPrice}
              value={value}
              setValue={setValue}
            />
          }
        />
        <Route
          path="/product/:id/description/:desc"
          element={<Description />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetail user={user} products={products} />}
        />
        <Route path="/cart" element={<Cart user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
