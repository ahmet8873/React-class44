import { Link } from "react-router-dom";
import { useFavorites } from "../FavoritesContext";
import heartRegularIcon from "../assets/heart-regular.svg";
import heartSolidIcon from "../assets/heart-solid.svg";

const Products = ({ productsData, selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? productsData.filter((product) => product.category === selectedCategory)
    : productsData;

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const toggleFavorite = (productId) => {
    if (isFavorite(productId)) {
      removeFromFavorites(productId);
    } else {
      addToFavorites(productId);
    }
  };

  return (
    <div>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div>
                <img src={product.image} alt="product" />
                <p>{product.title}</p>
              </div>
            </Link>
            <button onClick={() => toggleFavorite(product.id)}>
              {isFavorite(product.id) ? (
                <img src={heartSolidIcon} alt="Solid Heart" />
              ) : (
                <img src={heartRegularIcon} alt="Regular Heart" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
