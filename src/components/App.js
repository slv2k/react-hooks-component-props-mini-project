import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Sam's Blog" />
      <About text="This is my blog." />
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
