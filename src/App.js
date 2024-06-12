import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Content from "./pages/Content.jsx";
import Nav from "./component/Nav.jsx";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        {/* Tambahkan route lain di sini jika diperlukan */}
      </Routes>
    </Router>
  );
}

export default App;
