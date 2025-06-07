import AppRouter from "../components/blocks/AppRouter/AppRouter";
import Footer from "../components/blocks/Footer/Footer";
import Header from "../components/blocks/Header/Header";

function App() {
  return (
    <div className="app">
      <div>
        <Header />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
