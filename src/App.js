import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import SignInUp from "./routes/sign-in-up/sign-in-up.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        {/* <Route path="" element={<h1>else page</h1>} /> */}
        <Route path="/sign-in-up" element={<SignInUp />} />
        <Route path="card" element={<h1>card page</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
