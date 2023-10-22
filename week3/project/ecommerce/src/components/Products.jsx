import { useMemo } from "react";
import { useFavorites } from "../FavoritesContext";

import Product from "./Product";

const Products = ({ productsData, selectedCategory }) => {
  const filteredProducts = useMemo(() => {
    return selectedCategory
      ? productsData.filter((product) => product.category === selectedCategory)
      : productsData;
  }, [productsData, selectedCategory]);

  const { toggleFavorite } = useFavorites();

  return (
    <div>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            onToggleFavorite={() => toggleFavorite(product.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
