import React, { useEffect, useState } from "react";
import "./style.css";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const CardiovascularPage = () => {
  const { addToCart } = useCart();
  const [isDarkMode, setIsDarkMode] = useState(true); // Start in dark mode

  useEffect(() => {
    document.body.classList.add("dark-mode");
    const darkModeBtn = document.getElementById("darkModeBtn");
    if (darkModeBtn) darkModeBtn.innerText = "Mode🌞";

    const infoIcons = document.querySelectorAll(".info-icon");
    infoIcons.forEach((icon) => {
      icon.onclick = () => {
        const benefitBox = icon.nextElementSibling;
        benefitBox.style.display =
          benefitBox.style.display === "block" ? "none" : "block";
      };
    });
  }, []);

  const toggleDarkMode = () => {
    const isNowDark = document.body.classList.toggle("dark-mode");
    setIsDarkMode(isNowDark);
    const darkModeBtn = document.getElementById("darkModeBtn");
    if (darkModeBtn) {
      darkModeBtn.innerText = isNowDark ? "Mode🌞" : "Mode🌙";
    }
  };

  const renderFoodCards = (category) =>
    foodData[category].map((item, index) => (
      <div className="food-card" key={index}>
        <div className="image-container">
          <img src={item.image} alt={item.name} />
          <span className="info-icon">?</span>
          <div
            className="nutritional-benefit"
            dangerouslySetInnerHTML={{ __html: item.benefit }}
          ></div>
        </div>
        <h3>{item.name}</h3>
        <p className="price">Ksh {item.price}</p>
        <button
          className="add-to-cart"
          onClick={() =>
            addToCart({
              name: item.name,
              image: item.image,
              category,
              condition: "Cardiovascular",
              price: item.price,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    ));

  return (
    <div>
      <main>
        <section className="landing">
          <header>
            <h1 style={{ fontSize: "60px", textAlign: "center", margin: 0 }}>
              OkayBites Cardiovascular
            </h1>
            <button id="darkModeBtn" onClick={toggleDarkMode}>🌞</button>
          </header>

          <nav>
            <a href="#">
              <img src="okayimages/okaylogo.jpg" alt="mylogo" className="logo" />
            </a>
            <div className="links">
              <i className="fa fa-times"></i>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#fruits">Fruits</a></li>
                <li><a href="#vegetables">Vegetables</a></li>
                <li><a href="#proteins">Proteins</a></li>
                <li><a href="#wholegrains">Wholegrains</a></li>
              </ul>
            </div>
            <i className="fa fa-bars"></i>
          </nav>

          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Link to="/cart" className="cart-button">🛒Cart</Link>
          </div>

          {/* Sections */}
          <h2 id="fruits">🍎 Fruits</h2>
          <div className="food-grid">{renderFoodCards("fruits")}</div>

          <h2 id="vegetables">🥬 Vegetables</h2>
          <div className="food-grid">{renderFoodCards("vegetables")}</div>

          <h2 id="proteins">🍗 Proteins</h2>
          <div className="food-grid">{renderFoodCards("proteins")}</div>

          <h2 id="wholegrains">🌾 Wholegrains</h2>
          <div className="food-grid">{renderFoodCards("wholegrains")}</div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <p>&copy; 2025 OkayBites. All rights reserved.</p>
          <p>Contact us: <a href="mailto:walukayajoy@gmail.com">walukayajoy@gmail.com</a></p>
          <p>Passionate about health and wellness for all.</p>
        </div>
      </footer>
    </div>
  );
};

// ✅ Realistic prices added here (Ksh range: 30 - 150)
const foodData = {
  fruits: [
    { name: "Strawberries", image: "okayimages/stawberries.jpeg", benefit: "Rich in antioxidants<br>Reduces plaque buildup", price: 100 },
    { name: "Avocado", image: "okayimages/avocados.jpeg", benefit: "High in monounsaturated fats<br>Lowers bad cholesterol", price: 40 },
    { name: "Apple", image: "okayimages/apples.jpeg", benefit: "Soluble fiber<br>Helps clear arteries", price: 30 },
    { name: "Orange", image: "okayimages/orange.jpeg", benefit: "Contains hesperidin<br>Supports heart rhythm", price: 25 },
    { name: "Bananas", image: "okayimages/bananas.jpeg", benefit: "Potassium-rich<br>Helps heartbeat regulation", price: 20 },
    { name: "Grapes", image: "okayimages/grapes.jpeg", benefit: "Polyphenols improve blood flow", price: 80 },
    { name: "Pomegranates", image: "okayimages/pomegranates.jpeg", benefit: "Lowers arterial inflammation<br>Rich in antioxidants", price: 120 },
    { name: "Pear", image: "okayimages/pear.jpeg", benefit: "High fiber<br>Supports heart and digestive health", price: 35 },
  ],
  vegetables: [
    { name: "Spinach", image: "okayimages/spinach.jpeg", benefit: "Folate and potassium for heart function", price: 25 },
    { name: "Kale", image: "okayimages/Kales.png", benefit: "Vitamin K and omega-3s<br>Reduces arterial calcification", price: 30 },
    { name: "Brocolli", image: "okayimages/brocolli.jpeg", benefit: "Rich in fiber<br>Reduces LDL", price: 70 },
    { name: "Beetroot", image: "okayimages/beetroot.jpeg", benefit: "Improves circulation<br>Lowers heart strain", price: 50 },
    { name: "Carrots", image: "okayimages/carrots.jpeg", benefit: "Antioxidants protect heart tissue", price: 25 },
    { name: "Cauliflower", image: "okayimages/Cauliflower.png", benefit: "Anti-inflammatory<br>Supports vessel health", price: 70 },
    { name: "Tomato", image: "okayimages/tomatoes.png", benefit: "Lycopene-rich<br>Protects against heart disease", price: 30 },
    { name: "Green beans", image: "okayimages/green beans.jpeg", benefit: "Potassium and fiber support blood pressure control", price: 60 },
  ],
  proteins: [
    { name: "Salmon", image: "okayimages/salmon.jpeg", benefit: "Rich in omega-3s<br>Lowers triglycerides", price: 150 },
    { name: "Beans", image: "okayimages/beans.jpeg", benefit: "High in fiber<br>Reduces LDL and inflammation", price: 50 },
    { name: "Tofu", image: "okayimages/tofu.png", benefit: "Plant protein<br>Cholesterol-free", price: 70 },
    { name: "Skinless Chickenbreast", image: "okayimages/skinlesschickenbreast.jpeg", benefit: "Lean protein<br>Less saturated fat", price: 130 },
    { name: "Lentils", image: "okayimages/lentils.jpeg", benefit: "Reduce artery stiffness<br>Fiber-rich", price: 60 },
    { name: "Low fat milk", image: "okayimages/lowfatmilk.png", benefit: "Supports calcium levels<br>Avoids excess fat", price: 45 },
    { name: "Nuts(unsalted)", image: "okayimages/nuts.jpeg", benefit: "Good fats<br>Reduces heart risk", price: 90 },
    { name: "Eggs", image: "okayimages/eggs.jpeg", benefit: "Protein source<br>Low in saturated fat if boiled", price: 20 },
  ],
  wholegrains: [
    { name: "Oats", image: "okayimages/oats.jpeg", benefit: "Lowers cholesterol<br>Rich in beta-glucan", price: 80 },
    { name: "Brownrice", image: "okayimages/brownrice.jpeg", benefit: "Whole grain<br>Heart-healthy fiber", price: 70 },
    { name: "Quinoa", image: "okayimages/quinoa.jpeg", benefit: "Complete protein<br>Magnesium-rich", price: 100 },
    { name: "Barley", image: "okayimages/barley.jpeg", benefit: "Improves cholesterol and blood pressure", price: 60 },
    { name: "Whole wheat bread", image: "okayimages/wholewheatbread.jpeg", benefit: "Better than refined carbs<br>Heart-supportive", price: 40 },
    { name: "Millet", image: "okayimages/millet.jpeg", benefit: "Antioxidants and magnesium support arteries", price: 55 },
    { name: "Sorghum", image: "okayimages/sorghum.png", benefit: "Reduces inflammation and cholesterol", price: 50 },
    { name: "Whole maize(githeri)", image: "okayimages/githeri.png", benefit: "Fiber-rich<br>Good alternative to refined carbs", price: 60 },
  ],
};

export default CardiovascularPage;
