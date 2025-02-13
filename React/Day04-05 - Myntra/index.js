import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Card(props) {
  return (
    <div style={{ border: "2px solid black", padding: "2px" }}>
      <img
        className="img-card"
        src="https://chriscross.in/cdn/shop/files/ChrisCrossRoyalBlueCottonT-Shirt.jpg?v=1735895850&width=2048"
        width="200px"
      />
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h2>{props.offer}</h2>
        <h2>Price:{props.price}</h2>
        <button>Shop now</button>
      </div>
    </div>
  );
}

const arr = [
  { cloth: "T-Shirt", offer: "20-80%", price: 500 },
  { cloth: "Jeans", offer: "30-70%", price: 300 },
  { cloth: "Shoes", offer: "40-60%", price: 200 },
  { cloth: "Hoodies", offer: "50-50%", price: 1000 },
];

function Header() {
  return (
    <div className="heading">
      <img
        className="img-logo"
        src="https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png"
        width={200}
        title="logo"
      />
      <div className="option">
        <button className="button-option">Men</button>
        <button className="button-option">Women</button>
        <button className="button-option">Kids</button>
        <button className="button-option">Home</button>
        <button className="button-option">Beauty</button>
        <button className="button-option">Studio</button>
      </div>
      <input
        className="search"
        type="text"
        placeholder="search here..."
      ></input>

      <div className="Profile">
        <button className="profile-btn">Wishlist</button>
        <button className="profile-btn">Profiles</button>
        <button className="profile-btn">Bag</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/FEBRUARY/13/3u4KwbPi_33c51ce42b3c4f00b97c19b5d7ab5e10.jpg" />
    </div>
  );
}

function App() {
  const [A, setA] = useState(arr);

  function sortArr() {
    const sortedArr = A.sort((a, b) => a.price - b.price);
    setA([...sortedArr]);
  }

  function priceAbove500(){
    const B = arr.filter((value)=>value.price > 499);
    setA(B)
  }

  return (
    <>
      {/* Header  */}
      <Header />
      <button onClick={sortArr}>Sort by Price</button>
      <button onClick={priceAbove500}>priceAbove500</button>
      {/* Body */}
      <div className="middle-card">
        {A.map((value, index) => {
          return (
            <Card
              key={index}
              cloth={value.cloth}
              offer={value.offer}
              price={value.price}
            />
          );
        })}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Note: <App/> is used to call a function which is user-defined
