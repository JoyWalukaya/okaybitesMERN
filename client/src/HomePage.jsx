import './style.css';
import { Link } from "react-router-dom";
<Link to="/cart" className="cart-link">Go to Cart</Link>
function HomePage() {
  return (
    <section className="landing">
      <div className="content">
        <a href="#"><img src="okayimages/okaylogo.jpg" alt="mylogo" className="logo" /></a>
        <h1>OKAY BITES</h1>
        <nav className="conditions">
          <ul>
            <li><Link to="/diabetes">Diabetes</Link></li>
            <li><Link to="/hypertension">Hypertension</Link></li>
            <li><Link to="/cardiovascular">Cardiovascular</Link></li>
          </ul>
        </nav>
      </div>

      <footer className="site-footer">
        <div className="footer-content">
          <p>&copy; 2025 OkayBites. All rights reserved.</p>
          <p>Contact us: <a href="mailto:walukayajoy@gmail.com">walukayajoy@gmail.com</a></p>
          <p>Passionate about health and wellness for all.</p>
        </div>
      </footer>
    </section>
  );
}

export default HomePage;
