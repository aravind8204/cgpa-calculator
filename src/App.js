import Footer from "./components/Footer";
import GpaCalc from "./components/GpaCalc";
import Header from "./components/Header";


function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <GpaCalc />
        <Footer />
    </div>
  );
}

export default App;
