import React from "react";
import "./LatestCollection.css";
import latestcollection from "../Components/Assets/latestcollection";
import { Item } from "../Components/Item/Item";

const LatestCollection = () => {
  return (
    <div className="latest-collection-page">
      <h1>✨ Latest Collection ✨</h1>
      <hr />
      <p>Explore our trending new arrivals!</p>
      <p>Discover the latest trends across Men, Women, and Kids categories</p>

      <div className="latest-collection-grid">
        {latestcollection.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
