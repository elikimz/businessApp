
import { Link } from 'react-router-dom';
import Testimonials from '../components/testimonial'

const Home = () => {
  // Background image URL
  const backgroundImageUrl = 'https://media.istockphoto.com/id/501747566/photo/carpet-rolls.jpg?s=1024x1024&w=is&k=20&c=HKshcmkCulodFi3TZeZBJ1nbswzBPvXi1CctrnItI_k=';

  return (
    <>
      <header className="w-full py-6 bg-gray-800 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Carpet Logo"
              className="h-12 w-12 mr-3"
            /> {/* Replace with your logo URL */}
            <div className="text-3xl font-bold text-yellow-400">Carpet World</div>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><Link to="/" className="text-yellow-400 hover:text-white">Home</Link></li>
              <li><Link to="/shop" className="text-yellow-400 hover:text-white">Shop</Link></li>
              <li><Link to="/AboutUs" className="text-yellow-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-yellow-400 hover:text-white">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Static Background */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-4 text-center">Luxurious Carpets</h1>
          <p className="text-lg md:text-xl text-white mb-6 text-center">Comfort and style for your home.</p>
          <Link
            to="/shop"
            className="px-6 py-3 bg-yellow-500 text-gray-800 font-semibold rounded-md shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Discover Our Collection</h2>
          <p className="text-lg text-gray-600 mb-8">Explore our exclusive range of carpets and mats designed to enhance your home’s beauty and comfort.</p>
          <Link
            to="/shop"
            className="px-8 py-3 bg-purple-700 text-white font-bold rounded-md hover:bg-purple-800 transition-transform transform hover:scale-105"
          >
            Explore Now
          </Link>
        </div>
      </section>
       <Testimonials />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
