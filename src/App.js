import Navbar from './components/Navbar';
import Home from './components/Home';
import Collection from './components/Collection';
import Genre from './components/Genre';
import { Routes, Route } from "react-router-dom";
import { ScreenProvider } from "./contexts/ScreenContext";
import { UserProvider } from "./contexts/UserContext";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <MovieProvider>
          <ScreenProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/genre' element={<Genre />} />
              <Route path='/collection' element={<Collection />} />
            </Routes>
          </ScreenProvider>
        </MovieProvider>
      </UserProvider>
    </div>
  );
}

export default App;
