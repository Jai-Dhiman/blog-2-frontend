export function PostsShow({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <img src={post.image} alt={post.title} className="post-image" />
    </div>
  );
}
