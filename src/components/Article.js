import React from "react";

function Article({ post  }) {
const {title, preview, date = "January 1, 1970"} = post;
    console.log('Hi',post);

  return (
    <>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </>
  );
}
export default Article;