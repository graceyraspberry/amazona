import bcrypt from "bcryptjs";
export default {
  users: [
    {
      name: "Grace",
      email: "gracelam@berkeley.edu",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },

    {
      name: "John",
      email: "john@test.edu",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "White Shirt",
      category: "Shirts",
      image: "/images/whiteshirt.jpg",
      price: 200,
      brand: "Gucci",
      rating: 4.5,
      numReviews: 10,
      countInStock: 10,
    },
    {
      name: "Oversized Sweater",
      category: "Sweaters",
      image: "/images/whitesweater.jpg",
      price: 60,
      brand: "Zara",
      rating: 4.5,
      numReviews: 15,
      countInStock: 50,
    },
    {
      name: "Leggings",
      category: "Athletic",
      image: "/images/pants.jpg",
      price: 60,
      brand: "Lululemon",
      rating: 4.0,
      numReviews: 1,
      countInStock: 0,
    },

    {
      name: "Suede Coat",
      category: "Coat",
      image: "/images/coat.jpg",
      price: 140,
      brand: "Banana Republic",
      rating: 3.0,
      numReviews: 1,
      countInStock: 2,
    },
  ],
};
