import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Article from "./Article";
import { LoadingSpinner } from "./LoadingSpinner";

function ArticleDetail() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://northcoders-news-be.onrender.com/api/articles/${article_id}`
      )
      .then((response) => {
        setArticle(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [article_id]);

  useEffect(() => {
    axios
      .get(
        `https://northcoders-news-be.onrender.com/api/articles/${article_id}/comments`
      )
      .then((comments) => {
        setComments(comments.data);
        setIsCommentsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsCommentsLoading(false);
      });
  }, [article_id]);

  if (isLoading || isCommentsLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Article
      title={article.title}
      topic={article.topic}
      body={article.body}
      imageUrl={article.article_img_url}
      created_at={article.created_at}
      author={article.author}
      votes={article.votes}
      comments={comments}
      isOpenedArticle={true}
    />
  );
}

export default ArticleDetail;
