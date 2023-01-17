import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Interests from "./components/Interests"
import profilePicture from "./img/sammy.jpeg"
import "./css/main.css"

export default function App() {
    return (
      <>
        <div className="card">
            <img src={profilePicture} alt="Profile Picture" width={317} height={317} />
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
        
      </>
    );
  }