import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

const cars = [
  {
    id: 1,
    model: "Toyota Camry",
    price: 25000,
    image: "/car1.svg",
    category: "Sedan",
    country: "US",
    vendor: "Toyota",
  },
  {
    id: 2,
    model: "Honda Accord",
    price: 28000,
    image: "/car2.svg",
    category: "Sedan",
    country: "US",
    vendor: "Honda",
  },
  {
    id: 3,
    model: "Ford Mustang",
    price: 35000,
    image: "/car3.svg",
    category: "Muscle Car",
    country: "US",
    vendor: "Ford",
  },
  {
    id: 4,
    model: "Chevrolet Silverado",
    price: 42000,
    image: "/car4.svg",
    category: "Truck",
    country: "US",
    vendor: "Chevrolet",
  },
  {
    id: 5,
    model: "Tesla Model S",
    price: 90000,
    image: "/car5.svg",
    category: "Electric",
    country: "US",
    vendor: "Tesla",
  },
  {
    id: 6,
    model: "Jeep Wrangler",
    price: 38000,
    image: "/car1.svg",
    category: "SUV",
    country: "US",
    vendor: "Jeep",
  },
  {
    id: 7,
    model: "BMW X5",
    price: 75000,
    image: "/car2.svg",
    category: "SUV",
    country: "US",
    vendor: "BMW",
  },
  {
    id: 8,
    model: "Toyota Prius",
    price: 27000,
    image: "/car3.svg",
    category: "Hybrid",
    country: "CA",
    vendor: "Toyota",
  },
  {
    id: 9,
    model: "Nissan GTR",
    price: 110000,
    image: "/car4.svg",
    category: "Sports Car",
    country: "CA",
    vendor: "Nissan",
  },
  {
    id: 10,
    model: "Dodge Challenger",
    price: 40000,
    image: "/car5.svg",
    category: "Muscle Car",
    country: "CA",
    vendor: "Dodge",
  },
  {
    id: 11,
    model: "Volkswagen Golf",
    price: 22000,
    image: "/car3.svg",
    category: "Hatchback",
    country: "CA",
    vendor: "Volkswagen",
  },
  {
    id: 12,
    model: "Kia Telluride",
    price: 45000,
    image: "/car1.svg",
    category: "SUV",
    country: "GB",
    vendor: "Kia",
  },
  {
    id: 13,
    model: "Hyundai Sonata",
    price: 24000,
    image: "/car2.svg",
    category: "Sedan",
    country: "GB",
    vendor: "Hyndai",
  },
  {
    id: 14,
    model: "Ford F-150",
    price: 48000,
    image: "/car3.svg",
    category: "Truck",
    country: "US",
    vendor: "Ford",
  },
  {
    id: 15,
    model: "Mini Cooper",
    price: 29000,
    image: "/car4.svg",
    category: "Hatchback",
    country: "GB",
    vendor: "Mini Cooper",
  },
  {
    id: 16,
    model: "Mini Cooper",
    price: 29000,
    image: "/car5.svg",
    category: "Hatchback",
    country: "CA",
    vendor: "Mini Cooper",
  },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home cars={cars} />} />
          <Route path="/details/:carId" element={<Details cars={cars} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
