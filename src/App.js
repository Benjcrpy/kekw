
import './App.css';
import Home from './Components/Home';
import About from './Components/About';

import Token from './Components/Token';
import RoadMap from './Components/RoadMap';

import Footer from './Components/Footer';
function App() {

  return (
    
    <div className="App" >
     
      <Home/>
      <About/>

      <Token />
      <RoadMap />

      <Footer/>


    </div>
  );
}

export default App;
