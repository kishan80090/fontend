import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
import imageProducts from "../Components/Assets/imageproduct";
import latestcollection from "../Components/Assets/latestcollection";

export const ShopContext = createContext(null);


const combinedProducts = [
  ...all_product,
  ...imageProducts,
  ...latestcollection, 
];

const getDefaultCart = () => {
  let cart = {};
  combinedProducts.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      if (cartItems[id] > 0) {
        const product = combinedProducts.find((p) => p.id === Number(id));
        if (product) total += product.new_price * cartItems[id];
      }
    }
    return total;
  };

  const getTotalCartItems = () => {
    let total = 0;
    for (const id in cartItems) {
      total += cartItems[id];
    }
    return total;
  };
  
  const contextValue = {
    all_product: combinedProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
