import React from "react";

function Post(props) {
  let { post } = props;
  return <div className="Post">{post}</div>;
}

export default Post;
