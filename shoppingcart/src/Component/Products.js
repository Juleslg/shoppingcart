import { Form } from "react-router-dom";
import longboard from "../img/longboard.jpeg";
import minimal1 from "../img/minimal1.jpeg";
import minimal2 from "../img/minimal2.jpeg";

const products = [
  {
    id: 1,
    name: "Longboard Red",
    category: "surfboard",
    price: 100,
    image: longboard,
    description: "...",
  },

  {
    id: 2,
    name: "Fun Board",
    category: "surfboard",
    price: 100,
    image: minimal1,
    description: "...",
  },
  {
    id: 3,
    name: "Mini Malibu",
    category: "surfboard",
    price: 100,
    image: minimal2,
    description: "...",
  },
  {
    id: 4,
    name: "Wax 1",
    category: "wax",
    price: 5,
    imageURL: "...",
    description: "...",
  },
  {
    id: 5,
    name: "Wetsuit 1",
    category: "wetsuits",
    price: 50,
    imageURL: "...",
    description: "...",
  },
  // more products...
];

export default products;
