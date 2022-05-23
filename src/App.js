import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
