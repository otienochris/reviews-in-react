import React from "react";
import "./App.css";
import Review from "./components/Review";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h1>Our Reviews</h1>
          <div className="underline"></div>
        </div>
        <div className="reviews">
            <Review />
        </div>
      </section>
    </main>
  );
}

export default App;
