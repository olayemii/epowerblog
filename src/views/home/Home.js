import React from "react";
import { MainLayout, Card } from "../../components";

function Home() {
  return (
    <div className="Home">
      <MainLayout>
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
      </MainLayout>
    </div>
  );
}

export default Home;
