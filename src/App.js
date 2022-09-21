import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<h1>shop page</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
