export function PostsIndex({ posts, onShow }) {
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <text>{post.body}</text>
          <img src={post.image} />
          <button onClick={() => onShow(post)}>Expand</button>
        </div>
      ))}
    </div>
  );
}
