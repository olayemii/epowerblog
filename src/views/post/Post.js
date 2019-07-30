import React from "react";
import { MainLayout } from "../../components";

function Post(props) {
  let { post } = props;
  return (
    <div className="Post">
      <MainLayout>{post}</MainLayout>
    </div>
  );
}

export default Post;
