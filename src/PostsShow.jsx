export function PhotosShow({ post }) {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <p>{post.image}</p>
    </div>
  );
}
