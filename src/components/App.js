import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList"


function App() {
  return (
    <div className="App">
      <Header blogData={blogData}/>
      <About blogData={blogData}/>
      <ArticleList blogData={blogData}/>
    </div>
  );
}

export default App;
