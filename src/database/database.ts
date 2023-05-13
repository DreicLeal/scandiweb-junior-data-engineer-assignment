import { IProduct } from "./databaseInterface";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Sweater",
    size: ["XS", "S", "M", "L"],
    brand: "Zephyr",
    color: ["grey", "green", "red"],
    img: {
      "0": [
        "../src/assets/database/grey-sweater-1.png",
        "../src/assets/database/grey-sweater-2.png",
        "../src/assets/database/grey-sweater-3.png",
      ],
      "1": [
        "../src/assets/database/green-sweater-1.png",
        "../src/assets/database/green-sweater-2.png",
        "../src/assets/database/green-sweater-3.png",
      ],
      "2": [
        "../src/assets/database/red-sweater-1.png",
        "../src/assets/database/red-sweater-2.png",
        "../src/assets/database/red-sweater-3.png",
      ],
    },
    price: 49.99,
    quantity: 0,
    stock: 5,
  },
  {
    id: 2,
    name: "Shirt",
    size: ["XS", "S", "M", "L"],
    brand: "Lumos",
    color: ["white", "red", "blue"],
    img: {
      "0": [
        "../src/assets/database/white-shirt-1.png",
        "../src/assets/database/white-shirt-2.png",
        "../src/assets/database/white-shirt-3.png",
      ],
      "1": [
        "../src/assets/database/red-shirt-1.png",
        "../src/assets/database/red-shirt-2.png",
        "../src/assets/database/red-shirt-3.png",
      ],
      "2": [
        "../src/assets/database/blue-shirt-1.png",
        "../src/assets/database/blue-shirt-2.png",
        "../src/assets/database/blue-shirt-3.png",
      ],
    },
    price: 49.99,
    quantity: 0,
    stock: 5,
  },
  {
    id: 3,
    name: "Cardigan",
    size: ["XS", "S", "M", "L"],
    brand: "Lumos",
    color: ["green", "red", "yellow"],
    img: {
      "0": [
        "../src/assets/database/green-cardigan-1.png",
        "../src/assets/database/green-cardigan-2.png",
        "../src/assets/database/green-cardigan-3.png",
      ],
      "1": [
        "../src/assets/database/red-cardigan-1.png",
        "../src/assets/database/red-cardigan-2.png",
        "../src/assets/database/red-cardigan-3.png",
      ],
      "2": [
        "../src/assets/database/yellow-cardigan-1.png",
        "../src/assets/database/yellow-cardigan-2.png",
        "../src/assets/database/yellow-cardigan-3.png",
      ],
    },
    price: 49.99,
    quantity: 0,
    stock: 5,
  },
  {
    id: 4,
    name: "Watchband",
    size: ["XS", "S", "M", "L"],
    brand: "Lumos",
    color: ["grey", "green", "blue"],
    img: {
      "0": [
        "../src/assets/database/grey-bag-1.png",
        "../src/assets/database/grey-bag-2.png",
        "../src/assets/database/grey-bag-3.png",
      ],
      "1": [
        "../src/assets/database/green-bag-1.png",
        "../src/assets/database/green-bag-2.png",
        "../src/assets/database/green-bag-3.png",
      ],
      "2": [
        "../src/assets/database/blue-bag-1.png",
        "../src/assets/database/blue-bag-2.png",
        "../src/assets/database/blue-bag-3.png",
      ],
    },
    price: 49.99,
    quantity: 0,
    stock: 5,
  },
  {
    id: 5,
    name: "Dress",
    size: ["XS", "S", "M", "L"],
    brand: "Zephyr",
    color: ["yellow", "black", "red"],
    img: {
      "0": [
        "../src/assets/database/yellow-dress-1.png",
        "../src/assets/database/yellow-dress-2.png",
        "../src/assets/database/yellow-dress-3.png",
      ],
      "1": [
        "../src/assets/database/black-dress-1.png",
        "../src/assets/database/black-dress-2.png",
        "../src/assets/database/black-dress-3.png",
      ],
      "2": [
        "../src/assets/database/red-dress-1.png",
        "../src/assets/database/red-dress-2.png",
        "../src/assets/database/red-dress-3.png",
      ],
    },
    price: 79.99,
    quantity: 0,
    stock: 5,
  },
  {
    id: 6,
    name: "Boots",
    size: ["XS", "S", "M", "L"],
    brand: "Zephyr",
    color: ["black", "brown", "blue"],
    img: {
      "0": [
        "../src/assets/database/black-boots-1.png",
        "../src/assets/database/black-boots-2.png",
        "../src/assets/database/black-boots-3.png",
      ],
      "1": [
        "../src/assets/database/brown-boots-1.png",
        "../src/assets/database/brown-boots-2.png",
        "../src/assets/database/brown-boots-3.png",
      ],
      "2": [
        "../src/assets/database/blue-boots-1.png",
        "../src/assets/database/blue-boots-2.png",
        "../src/assets/database/blue-boots-3.png",
      ],
    },
    price: 49.99,
    quantity: 0,
    stock: 5,
  },
];
