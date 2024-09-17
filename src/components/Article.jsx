import React from "react";

function Article({ title, content, imageUrl }) {
  return (
    <div className="Article">
      <h2>{title}</h2>
      <p>{content}</p>
      <img
        src={imageUrl}
        alt="Image related to the article"
        className="article-image"
      />
    </div>
  );
}
export default Article;
