import Navbar from './components/Navbar';
import Home from './components/Home';
import Collection from './components/Collection';
import Genre from './components/Genre';
import { Routes, Route } from "react-router-dom";
import { Provider } from "./contexts/ScreenContext";

function App() {
  return (
    <div className="App">
      <Provider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/genre' element={<Genre />} />
          <Route path='/collection' element={<Collection />} />
        </Routes>
      </Provider>
    </div>

  );
}

export default App;
