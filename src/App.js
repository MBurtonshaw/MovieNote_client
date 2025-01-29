import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import { Provider } from "./contexts/ScreenContext";

function App() {
  return (
    <div className="App">
      <Provider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}>

          </Route>
        </Routes>
      </Provider>
    </div>

  );
}

export default App;
