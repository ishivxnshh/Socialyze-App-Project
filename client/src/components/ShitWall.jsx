import React from 'react'
import PostCard from './PostCard'

const ShitWall = () => {
  const posts = [
    {
      id: 1,
      image: "https://tse4.mm.bing.net/th/id/OIP.UO_qQv6pMxeuGQcC37u2ywHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      content: "This post has an image."
    },
    {
      id: 2,
      image: "https://tse4.mm.bing.net/th/id/OIP.UO_qQv6pMxeuGQcC37u2ywHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      content: "This post has an image."
    },
    {
      id: 3,
      image: "https://tse4.mm.bing.net/th/id/OIP.UO_qQv6pMxeuGQcC37u2ywHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      content: "This post has an image."
    },
    {
      id: 4,
      content: "This post has only text and no image."
    }
  ];
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post}/>
          )
          )}
        </div>
  )
}

export default ShitWall