import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from "./components/MainMenu";
import MyFlights from "./components/MyFlights";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/MyFlights" element={<MyFlights />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
