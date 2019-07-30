import React from "react";
import { Header, Card } from "./components";
import "./App.css";
import Footer from "./components/layouts/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="dgrid news-grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
