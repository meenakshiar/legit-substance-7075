import './App.css';
import Routers from './Routes/Routes';
// import Trial from './Components/LandingPage/trial';
import Temp, { Login, Signup } from './Components/LandingPage/temp'
function App() {
  return (
    <div className="App">
      <Routers />
    {/* <Temp/> */}
    {/* <Login/>
    <Signup/> */}
    </div>
  );
}

export default App;
