const Products = ({ productsData, selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? productsData.filter((product) => product.category === selectedCategory)
    : productsData;

  return (
    <div>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <div>
              <img src={product.image} alt="product" />
              <p>{product.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
