export function PostsIndex({ posts, onShow }) {
  return (
    <div className="posts-list">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} alt={post.title} className="post-image" />
          <button onClick={() => onShow(post)}>Expand</button>
        </div>
      ))}
    </div>
  );
}
