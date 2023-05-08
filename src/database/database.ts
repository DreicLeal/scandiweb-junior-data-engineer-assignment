import { IProduct } from "./databaseInterface";

export const products: IProduct[] = [
  {
    id: "1",
    name: "Hat",
    size: ["XS", "S", "M", "L"],
    color: ["1", "2", "3"],
    img: {
      "1": {
        img1: "./src/assets/database/white-hat-1.png",
        img2: "./src/assets/database/white-hat-2.png",
        img3: "./src/assets/database/white-hat-3.png",
      },
      "2": {
        img1: "./src/assets/database/black-hat-1.png",
        img2: "./src/assets/database/black-hat-2.png",
        img3: "./src/assets/database/black-hat-3.png",
      },
      "3": {
        img1: "./src/assets/database/red-hat-1.png",
        img2: "./src/assets/database/red-hat-2.png",
        img3: "./src/assets/database/red-hat-3.png",
      },
    },
    price: 49.99,
    stock: 5,
  },
  {
    id: "2",
    name: "Sunglasses",
    size: ["XS", "S", "M", "L"],
    color: ["1", "2", "3"],
    img: {
      "1": {
        img1: "./src/assets/database/glasses-grey-1.png",
        img2: "./src/assets/database/glasses-grey-2.png",
        img3: "./src/assets/database/glasses-grey-3.png",
      },
      "2": {
        img1: "./src/assets/database/glasses-green-1.png",
        img2: "./src/assets/database/glasses-green-2.png",
        img3: "./src/assets/database/glasses-green-3.png",
      },
      "3": {
        img1: "./src/assets/database/glasses-grey-1.png",
        img2: "./src/assets/database/glasses-grey-2.png",
        img3: "./src/assets/database/glasses-grey-3.png",
      },
    },
    price: 49.99,
    stock: 5,
  },
  {
    id: "3",
    name: "Watchband",
    size: ["XS", "S", "M", "L"],
    color: ["1", "2", "3"],
    img: {
      "1": {
        img1: "./src/assets/database/white-watchBand-1.png",
        img2: "./src/assets/database/white-watchBand-2.png",
        img3: "./src/assets/database/white-watchBand-3.png",
      },
      "2": {
        img1: "./src/assets/database/grey-watchBand-1.png",
        img2: "./src/assets/database/grey-watchBand-2.png",
        img3: "./src/assets/database/grey-watchBand-3.png",
      },
      "3": {
        img1: "./src/assets/database/blue-watchBand-1.png",
        img2: "./src/assets/database/blue-watchBand-2.png",
        img3: "./src/assets/database/blue-watchBand-3.png",
      },
    },
    price: 49.99,
    stock: 5,
  },
];