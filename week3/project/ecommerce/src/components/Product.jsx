import { Link } from "react-router-dom";
import { useFavorites } from "../FavoritesContext";
import heartRegularIcon from "../assets/heart-regular.svg";
import heartSolidIcon from "../assets/heart-solid.svg";

const Product = ({ product, onToggleFavorite }) => {
  const { id, image, title } = product;
  const isProductFavorite = useFavorites().isFavorite(id);

  return (
    <li>
      <Link to={`/products/${id}`}>
        <div>
          <img src={image} alt="product" />
          <p>{title}</p>
        </div>
      </Link>
      <button onClick={() => onToggleFavorite(id)}>
        {isProductFavorite ? (
          <img src={heartSolidIcon} alt="Solid Heart" />
        ) : (
          <img src={heartRegularIcon} alt="Regular Heart" />
        )}
      </button>
    </li>
  );
};

export default Product;
