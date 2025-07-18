import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';

const PostCard = ({ post }) => {
  const [votes, setVotes] = useState(0);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  const handleUpvote = () => {
    if (upvoted) {
      setUpvoted(false);
      setVotes(votes - 1);
    } else {
      setUpvoted(true);
      setVotes(votes + (downvoted ? 2 : 1));
      setDownvoted(false);
    }
  };

  const handleDownvote = () => {
    if (downvoted) {
      setDownvoted(false);
      setVotes(votes + 1);
    } else {
      setDownvoted(true);
      setVotes(votes - (upvoted ? 2 : 1));
      setUpvoted(false);
    }
  };

  return (
    <div className="h-auto max-w-2xl mx-auto my-5 border border-gray-700 rounded-xl bg-emerald-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white p-3">
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 object-cover border rounded-full"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt="avatar"
          />
          <span className="text-sm">Anonymous</span>
        </div>
        <div className="text-xs text-gray-300">2 mins ago</div>
      </div>

      {/* Body */}
      <div className="border-b border-white p-4">
        {post.image ? (
          <div className="flex items-start gap-4">
            <img
              className="w-36 h-36 object-cover rounded-xl border"
              src={post.image}
              alt="post"
            />
            <p className="text-sm">
              {post.content}
            </p>
          </div>
        ) : (
          <p className="text-sm">
           {post.content}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-6 px-5 py-4">
        <button onClick={handleUpvote}>
          <ThumbsUp
            className={`w-6 h-6 transition-colors ${upvoted ? 'text-green-500' : 'text-white'}`}
          />
        </button>
        <span>{votes}</span>
        <button onClick={handleDownvote}>
          <ThumbsDown
            className={`w-6 h-6 transition-colors ${downvoted ? 'text-red-500' : 'text-white'}`}
          />
        </button>
        <button>
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
