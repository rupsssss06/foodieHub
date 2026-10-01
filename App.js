import React from "react";
import ReactDOM from "react-dom/client";

/*
Header-logo, nav items
Body-search, restro container-restro card-img, name of res,star rating, cuisine , delivery time
Footer-copyright, links, address, contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://img.magnific.com/free-vector/vector-burger-illustration-design_779267-2398.jpg?semt=ais_hybrid&w=740&q=80" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestroCards = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://t4.ftcdn.net/jpg/12/78/88/15/360_F_1278881550_NsK2UT9gKl0a0EZJCpCwuhsqkBcQlN0B.jpg"
      />
      <h3>Meghna Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
        <RestroCards />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
