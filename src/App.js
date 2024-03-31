import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/app.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Housing from "./pages/Housing"
import Header from "./components/headers/Header";
import Footer from "./components/footer/Footer";
import bannerHeader from "./assets/banner.webp"
import bannerAbout from "./assets/banner_about.png"


const App = () => {
    return (
        <div>
            <Router >
            <Header />
                    <Routes>      
                        <Route path="/" element={<Home bannerImage={bannerHeader}/>}/>
                        <Route path="/logement/:id" element={<Housing/>} /> 
                        <Route path="/about" element={
                            <About bannerImage={bannerAbout}/>
                        }/>
                        <Route path="*" element={<Error />} /> 
                    </Routes>
            <Footer />        
            </Router>
        </div>
    );
};


export default App;
