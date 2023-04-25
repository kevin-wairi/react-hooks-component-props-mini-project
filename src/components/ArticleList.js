import React from "react";
import Article from "./Article"
import blogData from "../data/blog";

function ArticleList() {
  const { posts } = blogData;
//   console.log(posts);
  return (
    <main>
      {posts.map((post)=>
      <Article key={post.id} post={post} />)}
    </main>
  );
}

export default ArticleList;