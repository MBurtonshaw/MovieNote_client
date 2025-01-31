import Navbar from './components/Navbar';
import Home from './components/Home';
import Collection from './components/Collection';
import Genres from './components/Genres';
import GenreFilms from './components/GenreFilms';
import ComingSoon from './components/ComingSoon';
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
              <Route path='/coming_soon' element={<ComingSoon />} />
              <Route path='/genres' element={<Genres />} />
              <Route path='/genres/:genre' element={<GenreFilms />} />
              <Route path='/collection' element={<Collection />} />
            </Routes>
          </ScreenProvider>
        </MovieProvider>
      </UserProvider>
    </div>
  );
}

export default App;
