export function PostsIndex({ posts }) {
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <text>{post.body}</text>
          <img src={post.image} />
        </div>
      ))}
    </div>
  );
}
