import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import DividerImage from "./components/DividerImage/DividerImage.jsx";
import Products from "./components/Products/Products.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { galeria } from "./data/galeria.js";
import { products } from "./data/products.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <section className="section section--light">
          <div className="container container--gallery">
            <div className="section__header">
              <h2 className="section__title section__title--xl">Latest Updates</h2>
              <span className="section__more">More</span>
            </div>
            <Gallery items={galeria} />
          </div>
        </section>

        <DividerImage />

        <section className="section section--light">
          <div className="container container--products">
            <h2 className="section__title section__title--xl">Our Products</h2>
            <Products items={products} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <About />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
