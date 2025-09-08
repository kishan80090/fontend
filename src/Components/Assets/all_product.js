let all_product = [
  // --- WOMEN 1-12 ---
  { id: 1, name: "New Collection 1", category: "women", image: "https://kishan80090.github.io/jsondata/pictures/w1.jpg", new_price: 499, old_price: 699 },
  { id: 2, name: "New Collection 2", category: "women", image: "https://kishan80090.github.io/jsondata/pictures/w2.jpg", new_price: 599, old_price: 799 },
  { id: 3, name: "New Collection 3", category: "women", image: "https://kishan80090.github.io/jsondata/pictures/w3.jpg", new_price: 699, old_price: 899 },
  { id: 4, name: "New Collection 4", category: "women", image: "https://kishan80090.github.io/jsondata/pictures/w4.jpg", new_price: 799, old_price: 999 },
  { id: 5, name: "New Collection 5", category: "men", image: "https://kishan80090.github.io/jsondata/pictures/men2.jpg", new_price: 399, old_price: 599 },
  { id: 6, name: "New Collection 6", category: "women", image: "https://kishan80090.github.io/jsondata/pictures/w9.jpg", new_price: 549, old_price: 749 },
  { id: 7, name: "New Collection 7", category: "men", image: "https://kishan80090.github.io/jsondata/pictures/men4.jpg", new_price: 499, old_price: 699 },
  { id: 8, name: "New Collection 8", category: "kid", image: "https://kishan80090.github.io/jsondata/pictures/k1.jpg", new_price: 599, old_price: 799 },
  { id: 9, name: "New Collection 9", category: "women", image: "https://kishan80090.github.io/jsondata/pictures/w9.jpg", new_price: 399, old_price: 599 },
  { id: 10, name: "New Collection 10", category: "women", image: "https://kishan80090.github.io/jsondata/pictures/w10.jpg", new_price: 699, old_price: 899 },
  { id: 11, name: "New Collection 11", category: "women", image: "https://kishan80090.github.io/jsondata/pictures/w11.jpg", new_price: 799, old_price: 999 },
  { id: 12, name: "New Collection 12", category: "women", image: "https://kishan80090.github.io/jsondata/pictures/w12.jpg", new_price: 499, old_price: 699 },

  // --- MEN 13-24 ---
  { id: 13, name: "New Collection 13", category: "men", image: "https://kishan80090.github.io/jsondata/pictures/men1.jpg", new_price: 499, old_price: 699 },
  { id: 14, name: "New Collection 14", category: "men", image: "https://kishan80090.github.io/jsondata/pictures/men2.jpg", new_price: 599, old_price: 799 },
  { id: 15, name: "New Collection 15", category: "men", image: "https://kishan80090.github.io/jsondata/pictures/men3.jpg", new_price: 699, old_price: 899 },
  { id: 16, name: "New Collection 16", category: "men", image: "https://kishan80090.github.io/jsondata/pictures/men4.jpg", new_price: 799, old_price: 999 },
  { id: 17, name: "New Collection 17", category: "men", image: "https://kishan80090.github.io/jsondata/pictures/men5.jpg", new_price: 399, old_price: 599 },
  { id: 18, name: "New Collection 18", category: "men", image: "https://kishan80090.github.io/jsondata/pictures/men6.jpg", new_price: 549, old_price: 749 },
  { id: 19, name: "New Collection 19", category: "men", image: "https://kishan80090.github.io/jsondata/pictures/men7.jpg", new_price: 499, old_price: 699 },
  { id: 20, name: "New Collection 20", category: "men", image: "https://kishan80090.github.io/jsondata/pictures/men8.jpg", new_price: 599, old_price: 799 },
  { id: 21, name: "New Collection 21", category: "men", image: "https://kishan80090.github.io/jsondata/pictures/men9.jpg", new_price: 399, old_price: 599 },
  { id: 22, name: "New Collection 22", category: "men", image: "https://kishan80090.github.io/jsondata/pictures/men10.jpg", new_price: 699, old_price: 899 },
  { id: 23, name: "New Collection 23", category: "men", image: "https://kishan80090.github.io/jsondata/pictures/men11.jpg", new_price: 799, old_price: 999 },
  { id: 24, name: "New Collection 24", category: "men", image: "https://kishan80090.github.io/jsondata/pictures/men12.jpg", new_price: 499, old_price: 699 },

  // --- KIDS 25-36 ---
  { id: 25, name: "New Collection 25", category: "kid", image: "https://kishan80090.github.io/jsondata/pictures/k1.jpg", new_price: 299, old_price: 399 },
  { id: 26, name: "New Collection 26", category: "kid", image: "https://kishan80090.github.io/jsondata/pictures/k2.jpg", new_price: 349, old_price: 549 },
  { id: 27, name: "New Collection 27", category: "kid", image: "https://kishan80090.github.io/jsondata/pictures/k3.jpg", new_price: 399, old_price: 599 },
  { id: 28, name: "New Collection 28", category: "kid", image: "https://kishan80090.github.io/jsondata/pictures/k4.jpg", new_price: 449, old_price: 649 },
  { id: 29, name: "New Collection 29", category: "kid", image: "https://kishan80090.github.io/jsondata/pictures/k5.jpg", new_price: 299, old_price: 399 },
  { id: 30, name: "New Collection 30", category: "kid", image: "https://kishan80090.github.io/jsondata/pictures/k6.jpg", new_price: 349, old_price: 549 },
  { id: 31, name: "New Collection 31", category: "kid", image: "https://kishan80090.github.io/jsondata/pictures/k7.jpg", new_price: 399, old_price: 599 },
  { id: 32, name: "New Collection 32", category: "kid", image: "https://kishan80090.github.io/jsondata/pictures/k8.jpg", new_price: 449, old_price: 649 },
  { id: 33, name: "New Collection 33", category: "kid", image: "https://kishan80090.github.io/jsondata/pictures/k9.jpg", new_price: 299, old_price: 399 },
  { id: 34, name: "New Collection 34", category: "kid", image: "https://kishan80090.github.io/jsondata/pictures/k10.jpg", new_price: 349, old_price: 549 },
  { id: 35, name: "New Collection 35", category: "kid", image: "https://kishan80090.github.io/jsondata/pictures/k11.jpg", new_price: 399, old_price: 599 },
  { id: 36, name: "New Collection 36", category: "kid", image: "https://kishan80090.github.io/jsondata/pictures/k12.jpg", new_price: 449, old_price: 649 },
];

export default all_product;
