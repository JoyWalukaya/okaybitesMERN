import React, { useEffect, useState } from "react";
import "./style.css";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const DiabetesPage = () => {
  const { addToCart } = useCart();
  const [isDarkMode, setIsDarkMode] = useState(true); // default dark

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
              condition: "Diabetes",
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
              OkayBites Diabetes
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

          <h2 id="fruits">🍎 Fruits</h2>
          <div className="food-grid">{renderFoodCards("fruits")}</div>

          <h2 id="vegetables">🥬 Vegetables</h2>
          <div className="food-grid">{renderFoodCards("vegetables")}</div>

          <h2 id="proteins">🍗 Proteins</h2>
          <div className="food-grid">{renderFoodCards("proteins")}</div>

          <h2 id="wholegrains">🌾 Wholegrains</h2>
          <div className="food-grid">{renderFoodCards("wholegrains")}</div>
        </section>
        <div className="nutrition-hint">
  🧸 <strong>Tip:</strong> Click the <span className="inline-icon">❓</span> icon on any food to see its nutritional benefit!
</div>

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

// ✅ Prices added for each food item
const foodData = {
  fruits: [
    { name: "Apples", image: "okayimages/apples.jpeg", benefit: "Low glycemic index<br> High in fiber<br> Helps manage blood sugar", price: 30 },
    { name: "Pear", image: "okayimages/pear.jpeg", benefit: "Rich in antioxidants <br> Low sugar<br>Supports digestion", price: 35 },
    { name: "Strawberries", image: "okayimages/stawberries.jpeg", benefit: "Packed with antioxidants<br>Low sugar<br>High Fibre.", price: 90 },
    { name: "Orange", image: "okayimages/orange.jpeg", benefit: "Contains vitamin C<br>Moderate glycemic load <br>Hydrating", price: 25 },
    { name: "Avocado", image: "okayimages/avocados.jpeg", benefit: "Healthy fats<br>Low carb<br>Improves insulin sensitivity", price: 40 },
    { name: "Kiwi", image: "okayimages/kiwi.jpeg", benefit: "Low GI <br>High in vitamin C<br> Good fiber", price: 60 },
    { name: "Guava", image: "okayimages/guava.png", benefit: "High fiber<br>Slow sugar absorption<br>Low glycemic index", price: 45 },
    { name: "Grapes", image: "okayimages/grapes.jpeg", benefit: "Fiber rich<br>High water content<br>Improves insulin resistance", price: 70 },
  ],
  vegetables: [
    { name: "Spinach", image: "okayimages/spinach.jpeg", benefit: "Low in carbs<br>Rich in Magnesium<br>Supports glucose control", price: 25 },
    { name: "Kales", image: "okayimages/Kales.png", benefit: "High fibre<br>Antioxidants<br>Regulates blood sugar", price: 30 },
    { name: "Brocolli", image: "okayimages/brocolli.jpeg", benefit: "Contains sulforaphane<br>Reduces insulin resistance", price: 70 },
    { name: "Cabbage", image: "okayimages/Cabbage.png", benefit: "Low calorie<br>Good fiber<br>Supports digestion", price: 20 },
    { name: "Okra", image: "okayimages/okra.jpeg", benefit: "Rich in fiber<br>Slows sugar absorption<br>Anti diabetic effect", price: 50 },
    { name: "Carrots", image: "okayimages/carrots.jpeg", benefit: "Low GI<br>Rich in beta-carotene<br>Aids in eyehealth", price: 25 },
    { name: "Cauliflower", image: "okayimages/Cauliflower.png", benefit: "High fiber<br>Low carb", price: 60 },
    { name: "Zucchini", image: "okayimages/Zucchini.png", benefit: "Low carb<br>High water content<br>Helps weight management", price: 40 },
  ],
  proteins: [
    { name: "Eggs", image: "okayimages/eggs.jpeg", benefit: "High quality protein<br>Low carb", price: 20 },
    { name: "Skinless Chickenbreast", image: "okayimages/skinlesschickenbreast.jpeg", benefit: "Lean protein<br>Helps maintain blood sugar levels", price: 130 },
    { name: "Lentils", image: "okayimages/lentils.jpeg", benefit: "Complex carbs<br>Fibre rich <br>Promotes satiety", price: 55 },
    { name: "Beans", image: "okayimages/beans.jpeg", benefit: "High fiber<br>Slow digesting<br>Supports stable glucose", price: 50 },
    { name: "Tofu", image: "okayimages/tofu.png", benefit: "Low carb<br>Plant protein<br>Reduces sugar spikes", price: 70 },
    { name: "Greek Yoghurt", image: "okayimages/greekyoghurt.jpeg", benefit: "High protein<br>Low sugar <br>Gut friendly", price: 60 },
    { name: "Salmon", image: "okayimages/salmon.jpeg", benefit: "Lean protein<br>Supports insulin sensitivity", price: 150 },
    { name: "Cottage cheese", image: "okayimages/Cottagecheese.jpeg", benefit: "Good sugar.", price: 65 },
  ],
  wholegrains: [
    { name: "Brown rice", image: "okayimages/brownrice.jpeg", benefit: "High fiber<br>Low glycemic load<br>Slower digestion", price: 70 },
    { name: "Quinoa", image: "okayimages/quinoa.jpeg", benefit: "Protein rich<br>low GI<br>Helps glucose balance", price: 100 },
    { name: "Oats", image: "okayimages/oats.jpeg", benefit: "Contains beta-glucan<br>Lowers blood sugar spikes", price: 80 },
    { name: "Whole wheat chapati", image: "okayimages/Whole wheat chapati.png", benefit: "Slow-releasing carbs<br> Fiber-rich", price: 35 },
    { name: "Barley", image: "okayimages/barley.jpeg", benefit: "Improves insulin response<br>Lowers blood sugar", price: 60 },
    { name: "Millet", image: "okayimages/millet.jpeg", benefit: "Low GI<br>Gluten-free<br>Improves sugar control.", price: 55 },
    { name: "Buckwheat", image: "okayimages/buckwheat.png", benefit: "High fiber<br>Stabilizes blood sugar<br>Nutrient-dense", price: 70 },
    { name: "Sorghum", image: "okayimages/sorghum.png", benefit: "High fiber<br>Supports slow glucose release", price: 50 },
  ],
};

export default DiabetesPage;
