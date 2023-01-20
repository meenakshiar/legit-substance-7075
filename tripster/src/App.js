import './App.css';
import Carousel from './Components/LandingPage/Carousel';
import Footer from './Components/LandingPage/Footer';
import { MiniCarousel } from './Components/LandingPage/MiniCarousel';
import Navbar from './Components/LandingPage/Navbar';
import QnDetailsContainer from './Components/LandingPage/QnAContainer';
// import Trial from './Components/LandingPage/trial';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MiniCarousel/>
      <Carousel/>
      <QnDetailsContainer/>
      <Footer/>
      {/* <Trial/>  */}
    </div>
  );
}

export default App;
