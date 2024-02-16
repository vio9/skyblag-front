
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Apropos from "./Apropos";
import EnVrac from "./EnVrac";
import OhWow from "./OhWow";

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
