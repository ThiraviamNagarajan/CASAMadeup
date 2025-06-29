import { Routes, Route } from "react-router-dom";
import Collection from "./Components/Collection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MyProfile from "./Components/MyProfile";
import NavBar from "./Components/NavBar";
import Subscribe from "./Components/SubScribe";
import Testimonial from "./Components/Testimonials";

function App() {
  return (
    <>
      <NavBar />
      <div className="pt-[70px] md:pt-[170px]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Collection />
                <Testimonial />
                <Subscribe />
              </>
            }
          />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
