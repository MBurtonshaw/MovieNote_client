import Navbar from './components/Navbar';
import Home from './components/Home';
import Result from './components/Result';
import TopRated from './components/TopRated';
import Genres from './components/Genres';
import GenreFilms from './components/GenreFilms';
import ComingSoon from './components/ComingSoon';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Title from './components/Title';
import List from './components/List';
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
              <Route path='/top_rated' element={<TopRated />} />
              <Route path='/genres' element={<Genres />} />
              <Route path='/genres/:genre' element={<GenreFilms />} />
              <Route path='/search/:query' element={<Result />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/register' element={<Register />} />
              <Route path='/title/:id' element={<Title />} />
              <Route path='/list' element={<List />} />
            </Routes>
          </ScreenProvider>
        </MovieProvider>
      </UserProvider>
    </div>
  );
}

export default App;
