import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (<Router>
    <Routes>
      <Route path="/"exact element={<Home/>}/>
      <Route path="/Profile"exact element={<Profile/>}/>
    </Routes>
    </Router>
  );
}

export default App;
