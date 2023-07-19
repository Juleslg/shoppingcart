import { Form } from "react-router-dom";
import longboard from "../img/longboard.jpeg";
import minimal1 from "../img/minimal1.jpeg";
import minimal2 from "../img/minimal2.jpeg";
import minimal3 from "../img/minimal3.jpeg";
import wetsuit1 from "../img/wetsuit1.jpeg";
import wetsuit2 from "../img/wetsuit2.jpeg";
import wetsuit3 from "../img/wetsuit3.jpeg";
import wax1 from "../img/wax1.jpeg";
import wax2 from "../img/wax2.jpeg";
import wax3 from "../img/wax3.jpeg";

const products = [
  {
    id: 1,
    name: "Longboard Red",
    category: "surfboard",
    price: 100,
    image: longboard,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },

  {
    id: 2,
    name: "Fun Board",
    category: "surfboard",
    price: 100,
    image: minimal1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },
  {
    id: 3,
    name: "Mini Malibu",
    category: "surfboard",
    price: 100,
    image: minimal2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },

  {
    id: 4,
    name: "Tornado V6",
    category: "surfboard",
    price: 100,
    image: minimal3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },

  {
    id: 5,
    name: "Wax Fun",
    category: "wax",
    price: 5,
    image: wax1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },
  {
    id: 6,
    name: "Wax Soft",
    category: "wax",
    price: 5,
    image: wax2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },
  {
    id: 7,
    name: "Wetsuit Cool",
    category: "wetsuits",
    price: 50,
    image: wetsuit1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },

  {
    id: 8,
    name: "Wetsuit Tight",
    category: "wetsuits",
    price: 50,
    image: wetsuit2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },
  {
    id: 9,
    name: "Wetsuit Cooler",
    category: "wetsuits",
    price: 50,
    image: wetsuit3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },

  {
    id: 10,
    name: "Wax Great",
    category: "wax",
    price: 5,
    image: wax3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },
  // more products...
];

export default products;
