
import Virtual from './components/virtual/Virtual';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Slider from './components/slider/Slider';
import Products from './components/products/Products'
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Slider></Slider>
      <Virtual></Virtual>
      <Products></Products>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default App;
