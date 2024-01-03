
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dishes from './components/Dishes';
import About from './components/About';
import Menu from './components/Menu';
import Review from './components/Review';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Dishes/>
     <About/>
     <Menu/>
     <Review/>
     <Footer/>
    </div>
  );
}

export default App;
