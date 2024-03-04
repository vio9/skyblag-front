
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Apropos from "./about/Apropos";
import EnVrac from "./enVrac/EnVrac";
import OhWow from "./ohWow/OhWow";

function App() {
  return (
<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos/>}/>
        <Route path="/envrac" element={<EnVrac/>}/>
        <Route path="/ohwow" element={<OhWow/>}/>
			</Routes>
		</BrowserRouter>

  );
}

export default App;
