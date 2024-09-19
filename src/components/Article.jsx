import React, { useState } from "react";
import { Link } from "react-router-dom";

function Article({
  title,
  imageUrl,
  body,
  isOpenedArticle,
  comments = [],
  article_id,
  author,
  created_at = "",
  votes = 0,
  topic,
}) {
  const [userVoted, setUserVoted] = useState(false);
  const [voteCount, setVoteCount] = useState(votes);

  const handleVote = () => {
    if (userVoted) {
      setVoteCount(voteCount - 1);
      setUserVoted(false);
    } else {
      setVoteCount(voteCount + 1);
      setUserVoted(true);
    }
  };

  if (!isOpenedArticle)
    return (
      <div className="Article">
        <h2>{title}</h2>
        <img
          src={imageUrl}
          alt="Image related to the article"
          style={{ width: "50%" }}
          className="article-image"
        />
        <p>Author:{author}</p>
        <p>Topic:{topic}</p>
        <Link to={`/articles/${article_id}`}>Read more</Link>
      </div>
    );

  return (
    <div className="Article">
      <h2>{title}</h2>
      <img
        src={imageUrl}
        alt="Image related to the article"
        style={{ width: "50%" }}
        className="article-image"
      />
      <p>Author:{author}</p>
      <p>Topic:{topic}</p>
      <p>Created At: {new Date(created_at).toLocaleDateString()}</p>
      <p>Votes: {voteCount}</p>
      <button onClick={handleVote}>{userVoted ? "Unvote" : "Vote"}</button>
      <p>{body}</p>

      <div className="comments-section">
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.body}</p>
            <p>By: {comment.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Article;
