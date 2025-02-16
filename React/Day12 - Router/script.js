import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Form from "./components/Form";
import Default from "./components/Default";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            {/* http://localhost:1234/contact */}
            {/* http://localhost:1234/contact/form  */}
            {/* http://localhost:1234/contact/404 */}
            <Route index element={<Default />} />
            <Route path="form" element={<Form />} />
            <Route path="404" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
