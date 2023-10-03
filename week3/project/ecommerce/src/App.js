import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import useFetch from "./useFetch";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetch("https://fakestoreapi.com/products/categories");

  const {
    data: productsData,
    loading: productsLoading,
    error: productsError,
  } = useFetch("https://fakestoreapi.com/products");

  return (
    <div className="App">
      <div className="heading">
        <h1>Products</h1>
        <Navbar />
      </div>

      {categoriesLoading || productsLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Categories
            categoriesData={categoriesData}
            setSelectedCategory={setSelectedCategory}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Products
                  productsData={productsData}
                  selectedCategory={selectedCategory}
                />
              }
            />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route
              path="/products/favorites"
              productsData={productsData}
              element={<Favorites />}
            />
          </Routes>
        </>
      )}
      {categoriesError && (
        <p>Error fetching categories: {categoriesError.message}</p>
      )}
      {productsError && <p>Error fetching products: {productsError.message}</p>}
    </div>
  );
}

export default App;
