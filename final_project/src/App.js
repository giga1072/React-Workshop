import "./App.css";
import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
      <Footer/>
    </div>
  );
}

export default App;
