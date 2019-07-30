import React, { useState, useEffect, Fragment } from "react";
import { MainLayout, Card } from "../../components";

import axios from "axios";
import "./Home.css";
function Home(props) {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(null);
  useEffect(() => {
    getPagePost(page);
  }, [page]);

  const getPagePost = page => {
    setRecords(null);
    axios
      .get(`https://epower.ng/wp-json/wp/v2/posts?page=${page}&per_page=6`)
      .then(res => {
        console.log(res.data);
        setRecords(res.data);
      })
      .catch(err => alert("Error fetching posts"));
  };
  return (
    <div className="Home">
      <MainLayout>
        {records ? (
          <Fragment>
            <div className="dgrid news-grid">
              {records.map(record => (
                <Card
                  onClick={() => props.history.push(`/post/${record.slug}`)}
                  title={record.title && record.title.rendered}
                  thumbnail={record.featured_image_thumbnail}
                  excerpt={record.excerpt && record.excerpt.rendered}
                  key={record.id}
                />
              ))}
            </div>
            <div className="pagination">
              <button
                disabled={page === 1}
                className={page === 1 ? "disabled-cursor" : ""}
                onClick={() => setPage(page - 1)}
              >
                Previous
              </button>
              <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
          </Fragment>
        ) : (
          <div>Loading...</div>
        )}
      </MainLayout>
    </div>
  );
}

export default Home;
