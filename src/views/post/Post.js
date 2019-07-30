import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components";
import axios from "axios";
import "./Post.css";
function Post(props) {
  const [currPost, setCurrPost] = useState(null);
  useEffect(() => getPostBySlug(props.match.params.postid), []);

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
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: currPost.content.rendered }}
            />
          )
        ) : (
          <div>Loading. . .</div>
        )}
      </MainLayout>
    </div>
  );
}

export default Post;
