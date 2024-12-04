import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Login/Main";
import Header from "./components/Header";
import Home from "./Home/Home";
import Detail from "./Detail/Detail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
