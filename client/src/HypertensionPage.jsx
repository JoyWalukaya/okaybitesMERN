import React, { useEffect, useState } from "react";
import "./style.css";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const HypertensionPage = () => {
  const { addToCart } = useCart();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.add("dark-mode");

    const darkModeBtn = document.getElementById("darkModeBtn");
    if (darkModeBtn) {
      darkModeBtn.innerText = "Mode🌞";
    }

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
          <div className="nutritional-benefit">
            {item.benefit.map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </div>
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
              condition: "Hypertension",
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
              OkayBites Hypertension
            </h1>
            <button id="darkModeBtn" onClick={toggleDarkMode}>🌞</button>
          </header>

          <nav>
            <a href="#">
              <img src="/okayimages/okaylogo.jpg" alt="mylogo" className="logo" />
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

// ✅ Prices added
const foodData = {
  fruits: [
    { name: "Banana", image: "/okayimages/bananas.jpeg", benefit: ["High in potassium", "Lowers blood pressure"], price: 25 },
    { name: "Watermelon", image: "/okayimages/watermelon.png", benefit: ["Rich in L-citrulline", "Helps relax blood vessels"], price: 40 },
    { name: "Strawberries", image: "/okayimages/stawberries.jpeg", benefit: ["Antioxidants improve heart and vessel function"], price: 80 },
    { name: "Kiwi", image: "/okayimages/kiwi.jpeg", benefit: ["Helps reduce blood pressure", "Rich in potassium"], price: 60 },
    { name: "Orange", image: "/okayimages/orange.jpeg", benefit: ["High in vitamin C", "Lowers systolic BP"], price: 35 },
    { name: "Avocado", image: "/okayimages/avocados.jpeg", benefit: ["Healthy fats", "Potassium-rich", "Lowers LDL"], price: 45 },
    { name: "Pomegranates", image: "/okayimages/pomegranates.jpeg", benefit: ["Improves blood flow", "Lowers BP naturally"], price: 70 },
    { name: "Apple", image: "/okayimages/apples.jpeg", benefit: ["Soluble fiber", "Supports vascular health"], price: 30 },
  ],
  vegetables: [
    { name: "Spinach", image: "/okayimages/spinach.jpeg", benefit: ["High in potassium", "Low sodium", "Supports BP control"], price: 25 },
    { name: "Kales", image: "/okayimages/Kales.png", benefit: ["Loaded with minerals", "Heart-protective compounds"], price: 30 },
    { name: "Celery", image: "/okayimages/celery.png", benefit: ["Contains phthalides", "Relaxes blood vessels"], price: 40 },
    { name: "Brocolli", image: "/okayimages/brocolli.jpeg", benefit: ["High in potassium", "Fiber-rich", "Anti-inflammatory"], price: 60 },
    { name: "Beetroot", image: "/okayimages/beetroot.jpeg", benefit: ["Contains nitrates", "Lowers blood pressure"], price: 55 },
    { name: "Carrots", image: "/okayimages/carrots.jpeg", benefit: ["Rich in potassium", "Reduces arterial stiffness"], price: 25 },
    { name: "Cabbage", image: "/okayimages/Cabbage.png", benefit: ["Low sodium", "Fiber-rich", "Helps BP control"], price: 30 },
    { name: "Pumpkin", image: "/okayimages/pumpkin.png", benefit: ["Low in salt", "High in potassium and beta-carotene"], price: 35 },
  ],
  proteins: [
    { name: "Salmon", image: "/okayimages/salmon.jpeg", benefit: ["Omega-3s reduce BP", "Heart-friendly"], price: 150 },
    { name: "Skinless chicken breast", image: "/okayimages/skinlesschickenbreast.jpeg", benefit: ["Lean protein", "Low saturated fat"], price: 130 },
    { name: "Beans", image: "/okayimages/beans.jpeg", benefit: ["High fiber", "Reduces cholesterol", "Supports BP"], price: 50 },
    { name: "Lentils", image: "/okayimages/lentils.jpeg", benefit: ["Lowers systolic BP", "Plant protein"], price: 55 },
    { name: "Tofu", image: "/okayimages/tofu.png", benefit: ["Plant-based protein", "No cholesterol"], price: 65 },
    { name: "Greek Yoghurt", image: "/okayimages/greekyoghurt.jpeg", benefit: ["Contains potassium", "Supports vessel health"], price: 60 },
    { name: "Eggs", image: "/okayimages/eggs.jpeg", benefit: ["Good protein", "Avoid adding salt"], price: 20 },
    { name: "Low fat milk", image: "/okayimages/lowfatmilk.png", benefit: ["Calcium + potassium", "Lowers blood pressure"], price: 40 },
  ],
  wholegrains: [
    { name: "Brownrice", image: "/okayimages/brownrice.jpeg", benefit: ["Whole grain", "Regulates BP and cholesterol"], price: 70 },
    { name: "Oats", image: "/okayimages/oats.jpeg", benefit: ["Soluble fiber", "Lowers systolic BP"], price: 80 },
    { name: "Whole Wheat Bread", image: "/okayimages/wholewheatbread.jpeg", benefit: ["Low sodium", "Good for heart"], price: 50 },
    { name: "Barley", image: "/okayimages/barley.jpeg", benefit: ["Helps reduce high BP and LDL"], price: 60 },
    { name: "Millet", image: "/okayimages/millet.jpeg", benefit: ["High magnesium", "Supports blood flow"], price: 55 },
    { name: "Quinoa", image: "/okayimages/quinoa.jpeg", benefit: ["Rich in magnesium and fiber"], price: 100 },
    { name: "Sorghum", image: "/okayimages/sorghum.png", benefit: ["Blood pressure friendly", "Antioxidant-rich"], price: 50 },
    { name: "Whole maize (Githeri)", image: "/okayimages/githeri.png", benefit: ["Slow digesting carbs", "Potassium-rich"], price: 45 },
  ],
};

export default HypertensionPage;
