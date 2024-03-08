import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./components/Error";
import Logement from "./pages/Logements";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
    return (
        <div>
            <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/logement" element={<Logement />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
            </Router>
        </div>
    );
};


export default App;
