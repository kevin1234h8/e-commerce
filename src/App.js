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
import Blog from "./page/Blog";
import BlogDetail from "./page/subpage/detail/BlogDetail";
import SubBlogDetail from "./page/subpage/detail/SubBlogDetail";

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
  const [blogs, setBlogs] = useState([]);
  const [subBlogs, setSubBlogs] = useState([]);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [blogPage, setBlogPage] = useState(0);
  const [subBlogPerPage, setSubBlogPerPage] = useState(2);
  console.log(user);

  useEffect(() => {
    localStorage.setItem("selectedItem", JSON.stringify(category));
  }, [category]);

  useEffect(() => {
    JSON.parse(localStorage.getItem("selectedItem"));
  }, []);

  const searchProduct = async () => {
    const res = await axios.get(
      `https://kevin-ecommerce.vercel.app/api/products?q=${search}&category=${category}&limit=${productPerPage}`,
      { withCredentials: true }
    );
    setProducts(res.data);
  };

  const categoryFilter = async (category) => {
    const res = await axios.get(
      `https://kevin-ecommerce.vercel.app/api/products?category=${category}&min=${value[0]}&max=${value[1]}&limit=${productPerPage}`,
      { withCredentials: true }
    );
    setProducts(res.data);
  };

  const searchCategory = async () => {
    const res = await axios.get(
      `https://kevin-ecommerce.vercel.app/api/products?category=${category}`,
      { withCredentials: true }
    );
    setProducts(res.data);
  };

  const checkboxFilter = async () => {
    const res = await axios.get(
      `https://kevin-ecommerce.vercel.app/api/products?category=${category}&brand=${brands}&min=${value[0]}&max=${value[1]}&limit=${productPerPage}`,
      { withCredentials: true }
    );

    setProducts(res.data);
  };

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        `https://kevin-ecommerce.vercel.app/api/products?p=${page}&limit=${productPerPage}`,
        { withCredentials: true }
      );
      setProducts(res.data);
    };
    getProduct();
  }, [productPerPage, page]);

  useEffect(() => {
    const getLoginData = async () => {
      const res = await axios.get(
        "https://kevin-ecommerce.vercel.app/login/success",
        { withCredentials: true }
      );
      setUser(res.data);
    };
    getLoginData();
  }, []);

  const showPageProduct = async () => {
    const res = await axios.get(
      `https://kevin-ecommerce.vercel.app/api/products?q=${search}&category=${category}&p=${page}&limit=${productPerPage}`,
      { withCredentials: true }
    );
    setProducts(res.data);
  };

  const showProductPerPage = async () => {
    const res = await axios.get(
      `https://kevin-ecommerce.vercel.app/api/products?q=${search}&category=${category}&brand=${brands}&min=${value[0]}&max=${value[1]}&limit=${productPerPage}`,
      { withCredentials: true }
    );
    setProducts(res.data);
  };

  useEffect(() => {
    const getBlog = async () => {
      const res = await axios.get(
        "https://kevin-ecommerce.vercel.app/api/blog",
        {
          withCredentials: true,
        }
      );
      setBlogs(res.data);
    };
    getBlog();
  }, []);

  useEffect(() => {
    const getSubBlog = async () => {
      const res = await axios.get(
        `https://kevin-ecommerce.vercel.app/api/subBlog?limit=${subBlogPerPage}&p=${blogPage}`,
        { withCredentials: true }
      );
      setSubBlogs(res.data);
    };
    getSubBlog();
  }, [subBlogPerPage, blogPage]);

  useEffect(() => {
    const getComment = async () => {
      const res = await axios.get(
        "https://kevin-ecommerce.vercel.app/api/comment",
        { withCredentials: true }
      );
      setComments(res.data);
    };
    getComment();
  }, []);

  const sendComment = async () => {
    const res = await axios.post(
      "https://kevin-ecommerce.vercel.app/api/comment/add",
      {
        name,
        email,
        message,
      },
      { withCredentials: true }
    );
    setComments([...comments, res.data]);
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
          // element={user ? <Navigate to={"/"} /> : <Login />}
          element={<Login />}
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
        <Route
          path="/blog"
          element={
            <Blog
              blogs={blogs}
              subBlogs={subBlogs}
              setSubBlogPerPage={setSubBlogPerPage}
              setBlogPage={setBlogPage}
            />
          }
        />
        <Route
          path="/blog/:blogId"
          element={
            <BlogDetail
              blogs={blogs}
              comments={comments}
              sendComment={sendComment}
              setName={setName}
              setEmail={setEmail}
              setMessage={setMessage}
              subBlogs={subBlogs}
            />
          }
        />
        <Route
          path="/subBlog/:id"
          element={<SubBlogDetail subBlogs={subBlogs} comments={comments} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
