import React from "react";
import ReactDOM from "react-dom/client";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  Navigate 
} from "react-router";
import Home from "../Day12 - Router/components/Home";
import Github from "./components/Github";

function App() {
  return (
    <>
      <Router>
        <nav style={{ margin: "10px" }}>
          <Link to="/home" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/github/octocat">Github</Link>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* Default route for /github */}
          <Route path="/github" element={<Navigate to="/github/octocat" />} />
          <Route path="/github/:name" element={<Github />} />
        </Routes>
      </Router>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
