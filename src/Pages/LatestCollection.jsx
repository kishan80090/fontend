import React from "react";
import "./LatestCollection.css";
import latestcollection from "../Components/Assets/latestcollection";
import { Item } from "../Components/Item/Item";
import latestVideo from "../Components/Assets/latest1.mp4";

const LatestCollection = () => {
  return (
    <div className="latest-collection-page">

      <div className="banner-wrapper">
        <video
          className="latest-banner-video"
          src={latestVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="banner-overlay">
          <h1 style={{color:"gray"}} >✨ Latest Collection ✨</h1>
          <p style={{color:"white"}} >Explore our trending new arrivals</p>
        </div>
      </div>

      <hr />
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
