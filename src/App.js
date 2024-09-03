
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Apropos from "./about/Apropos";
import EnVrac from "./enVrac/EnVrac";
import OhWow from "./ohWow/OhWow";
import Activities from "./activites/Activities";
import Quiz from './quiz/Quiz';
import LegalNotice from "./about/LegalNotice";
import Error from "./utils/error/Error";

function App() {
  return (
<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos/>}/>
        <Route path="/envrac" element={<EnVrac/>}/>
        <Route path="/ohwow" element={<OhWow/>}/>
        <Route path="/activites" element={<Activities/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/mentions-legales' element={<LegalNotice/>}/>
        <Route path="*" element={<Error/>}/>
			</Routes>
		</BrowserRouter>

  );
}

export default App;
