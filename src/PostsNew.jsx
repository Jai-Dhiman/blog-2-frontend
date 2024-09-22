export function PostsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div className="new-post-form">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input id="title" name="title" type="text" required />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea id="body" name="body" required></textarea>
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input id="image" name="image" type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
