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
  commentBody,
  handleCommentChange,
  handleCommentSubmit,
}) {
  const [userUpvoted, setUserUpvoted] = useState(false);
  const [userDownvoted, setUserDownvoted] = useState(false);
  const [voteCount, setVoteCount] = useState(votes);

  const handleUpVote = () => {
    if (userUpvoted) {
      setVoteCount(voteCount - 1);
      setUserUpvoted(false);
    } else {
      setVoteCount(voteCount + 1);
      setUserUpvoted(true);
    }
  };

  const handleDownvote = () => {
    if (userDownvoted) {
      setVoteCount(voteCount + 1);
      setUserDownvoted(false);
    } else {
      setVoteCount(voteCount - 1);
      setUserDownvoted(true);
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
      <button onClick={handleUpVote}>
        {userUpvoted ? "Unvote" : "UpVote"}
      </button>
      <button onClick={handleDownvote}>
        {userDownvoted ? "Unvote" : "DownVote"}
      </button>
      <p>{body}</p>

      <div className="comments-section">
        <h3>Comments</h3>
        <form className="post-comment" onSubmit={handleCommentSubmit}>
          <textarea
            value={commentBody}
            onChange={handleCommentChange}
            placeholder="Leave a comment..."
            required
          ></textarea>
          <button type="submit">Post Comment</button>
        </form>
        {comments.map((comment) => (
          <div key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>By: {comment.author}</p>
            <p>Votes: {comment.votes}</p>
            <p>Created At: {new Date(comment.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Article;
