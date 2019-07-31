import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components";
import axios from "axios";
import "./Post.css";
function Post(props) {
  const [currPost, setCurrPost] = useState(null);
  useEffect(
    () => getPostBySlug(props.match.params && props.match.params.postid),
    [props]
  );

  const getPostBySlug = slug => {
    setCurrPost(null);
    axios
      .get(`https://epower.ng/wp-json/wp/v2/posts/?slug=${slug}`)
      .then(res => {
        setCurrPost(res.data[0]);
        console.log(res);
      })
      .catch(err => alert("Error fetching content"));
  };
  return (
    <div className="Post">
      <MainLayout
        headerTitle={
          currPost ? currPost.title && currPost.title.rendered : "Loading..."
        }
        headerSubTitle={
          currPost ? "PUBLISHED ON " + currPost.post_date : "Loading..."
        }
      >
        {currPost ? (
          currPost.content && (
            <div className="post-content">
              <div className="post-image">
                <img src={currPost.featured_image} alt="" />
              </div>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: currPost.content.rendered }}
              />
            </div>
          )
        ) : (
          <div>Loading. . .</div>
        )}
      </MainLayout>
    </div>
  );
}

export default Post;
