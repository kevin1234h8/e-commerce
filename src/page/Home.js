import React, { useEffect, useState } from "react";
import Navbar from "../ui/Navbar";
import Brand from "../ui/Brand";
import Tags from "../ui/Tags";
import Heading from "../ui/Heading";
import Filter from "../ui/Filter";
import Product from "../ui/Product";
import Footer from "../ui/Footer";
import axios from "axios";
const Home = ({
  user,
  products,
  search,
  setSearch,
  category,
  setCategory,
  searchCategory,
  categoryFilter,
  showPageProduct,
  showProductPerPage,
  setProductPerPage,
  setPage,
  searchProduct,
  checkboxFilter,
  setBrands,
  setMinPrice,
  setMaxPrice,
  priceFilter,
  maxPrice,
  minPrice,
  value,
  setValue,
}) => {
  const [list, setList] = useState(false);

  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products")
  //     .then((res) => setProduct(res.data.products));
  // }, []);
  // console.log(product);

  // const sendProduct = () => {
  //   axios.post("http://localhost:5000/product/add", product).then((res) => {
  //     console.log(res.data);
  //   });
  // };

  return (
    <div>
      <Navbar user={user} />
      <Brand
        category={category}
        setCategory={setCategory}
        user={user}
        searchCategory={searchCategory}
        setSearch={setSearch}
        searchProduct={searchProduct}
      />
      <Tags />
      <Heading />
      <Filter />
      <Product
        search={search}
        user={user}
        products={products}
        categoryFilter={categoryFilter}
        showPageProduct={showPageProduct}
        setPage={setPage}
        setProductPerPage={setProductPerPage}
        showProductPerPage={showProductPerPage}
        checkboxFilter={checkboxFilter}
        setBrands={setBrands}
        setMaxPrice={setMaxPrice}
        setMinPrice={setMinPrice}
        priceFilter={priceFilter}
        maxPrice={maxPrice}
        minPrice={minPrice}
        value={value}
        setValue={setValue}
        category={category}
        setCategory={setCategory}
      />
      <Footer />
    </div>
  );
};

export default Home;
