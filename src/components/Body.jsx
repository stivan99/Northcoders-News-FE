import Article from "./Article";
import React from "react";
import { useState, useEffect } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import axios from "axios";
let url = "https://northcoders-news-be.onrender.com/api/articles";

function Body() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);

        setArticles(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="Body">
      {articles.map((article) => (
        <Article
          key={article.article_id}
          article_id={article.article_id}
          author={article.author}
          topic={article.topic}
          title={article.title}
          imageUrl={article.article_img_url}
          isOpenedArticle={false}
        />
      ))}
    </div>
  );
}
export default Body;
