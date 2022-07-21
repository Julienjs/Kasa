import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Housing from "../pages/Housing";
import NotFound from "../pages/NotFound";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="Kasa-/" element={<Home />} />
                <Route path="Kasa-/about" element={<About />} />
                <Route path="Kasa-/housing/:id" element={<Housing />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </div>
    )
}
export default App