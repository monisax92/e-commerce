import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<h1>shop page</h1>} />
        <Route path="" element={<h1>else page</h1>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="card" element={<h1>card page</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
