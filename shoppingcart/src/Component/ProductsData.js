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
    slug: "longboard-red",
    category: "surfboard",
    price: 100,
    image: longboard,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },

  {
    id: 2,
    name: "Fun Board",
    slug: "fun-board",
    category: "surfboard",
    price: 100,
    image: minimal1,
    description:
      "A type of surfboard which is roughly in between a shortboard and a mini-mal. A funboard is a little longer than a shortboard and with wider and somewhat rounded nose and tail, making it easier to paddle but still having most of the performance of a shortboard.",
  },
  {
    id: 3,
    name: "Mini Malibu",
    category: "surfboard",
    slug: "mini-malibu",
    price: 100,
    image: minimal2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },

  {
    id: 4,
    name: "Tornado V6",
    category: "surfboard",
    slug: "tornado-v6",
    price: 100,
    image: minimal3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },

  {
    id: 5,
    name: "Wax Fun",
    category: "wax",
    slug: "wax-fun",
    price: 5,
    image: wax1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },
  {
    id: 6,
    name: "Wax Soft",
    category: "wax",
    slug: "wax-fun",
    price: 5,
    image: wax2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },
  {
    id: 7,
    name: "Wetsuit Cool",
    category: "wetsuits",
    size: null,
    slug: "wetsuit-cool",
    price: 50,
    image: wetsuit1,

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },

  {
    id: 8,
    name: "Wetsuit Tight",
    category: "wetsuits",
    size: null,
    slug: "wetsuit-tight",
    price: 50,
    image: wetsuit2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },
  {
    id: 9,
    name: "Wetsuit Cooler",
    category: "wetsuits",
    slug: "wetsuit-cooler",
    size: null,
    price: 50,
    image: wetsuit3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },

  {
    id: 10,
    name: "Wax Great",
    category: "wax",
    slug: "wax-great",
    price: 5,
    image: wax3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra venenatis nisi. Donec dui ante, lobortis id metus et, tincidunt cursus arcu. Fusce vulputate dui vitae dui congue tempor. Sed auctor cursus dolor. Fusce luctus magna accumsan quam laoreet tristique. In quis dignissim nisi. Donec at pretium diam. Curabitur eget sapien convallis, ornare urna ut, auctor ante. Vivamus nec mi at lectus euismod rutrum sit amet id elit. Proin quis eros dignissim, ultricies nibh a, condimentum quam.",
  },
  // more products...
];

export default products;
