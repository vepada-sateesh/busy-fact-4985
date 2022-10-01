import './App.css';
import Footer from './Components/Footer';
import AllRoutes from './Pages/AllRoutes';
import Navbar from "./Components/Navbar"
// import Home from "./Pages/Home"


function App() {
  return (
    <div className="App">
      <Navbar/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
