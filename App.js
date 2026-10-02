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
const resObj = {
  info: {
    id: "712744",
    name: "Radhe Radhe Lhs",
    cloudinaryImageId: "a3b64b8961e0d29ea37d916b4adb6730",
    locality: "Vip Road",
    areaName: "Laherisarai",
    costForTwo: "₹300 for two",
    cuisines: ["South Indian", "Sweets", "Bakery", "Pizzas"],
    avgRating: 4.3,
    veg: true,
    parentId: "425573",
    avgRatingString: "4.3",
    totalRatingsString: "4.0K+",
    sla: {
      deliveryTime: 42,
      lastMileTravel: 3.9,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "3.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-10-02 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description:
            "Serves only 100% vegetarian food, with no non-veg items.",
        },
      ],
    },
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description:
                  "Serves only 100% vegetarian food, with no non-veg items.",
                imageId: "v1695133679/badges/Pure_Veg111.png",
                theme: "",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    priceComparisonComms: {},
  },
  analytics: {
    context: "seo-data-80f66c4d-803d-4746-8f47-cad1f0b02009",
  },
  cta: {
    link: "https://www.swiggy.com/city/darbhanga/radhe-radhe-lhs-vip-road-laherisarai-rest712744",
    type: "WEBLINK",
  },
};
const RestroCards = ({ resData }) => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://t4.ftcdn.net/jpg/12/78/88/15/360_F_1278881550_NsK2UT9gKl0a0EZJCpCwuhsqkBcQlN0B.jpg"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines}</h4>
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
        <RestroCards resData={resObj} />
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
