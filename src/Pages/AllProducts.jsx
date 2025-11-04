import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Item } from '../Components/Item/Item';
import './CSS/AllProducts.css';

const AllProducts = () => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="all-products">
      <h1>All Products</h1>
      <div className="allproducts-grid">
        {all_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
