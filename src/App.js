
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Cart from './component/Cart';
import { ProductsList } from './component/ProductsList';

 export const Initial_List= [
  {
    "id": 1,
    "name": "iPhone X",
    "company": "Apple",
    "poster": "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
    "price": 899,
    "rating": 3.5,
    "summary": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ... ",
    "stock": 34,
    "qnty":0,
    

  },
  {
    "id": 2,
    "name": "Samsung Galaxy S23 5G (256GB Storage) ",
    "company": "Samsung",
    "poster": "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
    "price": "₹65,320",
    "rating": 4.7,
    "summary": "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time.",
    "stock": 123,
    "qnty":0,
  },
  {
    "id": 3,
    "name": "Samsung Galaxy S23 Ultra 5G (256GB Storage) ",
    "company": "Samsung",
    "poster": "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
    "price": "₹1,00,000",
    "rating": 5,
    "summary": "Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on a phone ",
    "stock": 125,
    "qnty":0,
  },
  {
    "id": 4,
    "name": "Apple AirPods Pro (2nd Generation) ​​​​​​​ ",
    "company": "Apple",
    "poster": "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
    "price": "₹20,999 ",
    "rating": 4.8,
    "summary": "Active Noise Cancellation reduces unwanted background noise.Adaptive Transparency lets outside sounds in while reducing loud environmental noise.",
    "stock": 68,
    "qnty":0,
  },

]


function App() {

 
  return (
    <div className="App">
      <NavBar />
      <Routes>

        <Route path="/" element={<ProductsList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>


    </div>
  );
}


export default App;
