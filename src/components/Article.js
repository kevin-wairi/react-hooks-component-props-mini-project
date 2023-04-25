import React from "react";

function Article({ post  }) {

    console.log('Hi',post);

  return (
    <>
      <h3>{post.title}</h3>
      <small>{post.date}</small>
      <p>{post.preview}</p>
    </>
  );
}
export default Article;