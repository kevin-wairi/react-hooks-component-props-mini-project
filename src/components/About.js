import React from "react";
import blogData from "../data/blog";

function About({blogData}){
  const{
    about,
    image="https://via.placeholder.com/215",
  }= blogData


return (
  <aside>
    <img src={image} alt="blog logo" />
    <p>{about}</p>
  </aside>
);
}

export default About;