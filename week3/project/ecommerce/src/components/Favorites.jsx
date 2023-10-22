import { useFavorites } from "../FavoritesContext";
import heartRegularIcon from "../assets/heart-regular.svg";
import heartSolidIcon from "../assets/heart-solid.svg";
import useFetch from "../useFetch";

const Favorites = () => {
  const {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
  } = useFavorites();

  const { data: productsData } = useFetch("https://fakestoreapi.com/products");

  const favoriteProducts = productsData.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <div>
      <h2>Favorites</h2>
      <ul className="product-list">
        {favoriteProducts.map((product) => (
          <li key={product.id}>
            <div>
              <img src={product.image} alt="product" />
              <p>{product.title}</p>
              <button onClick={() => toggleFavorite(product.id)}>
                {isFavorite(product.id) ? (
                  <img src={heartSolidIcon} alt="Solid Heart" />
                ) : (
                  <img src={heartRegularIcon} alt="Regular Heart" />
                )}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
