import { useHistory, useParams } from "react-router-dom";

const BlogDetails = ({ blogs, setBlogs }) => {
  const { id } = useParams();
  const history = useHistory();
  const blog = blogs.find(blog => blog.id === parseInt(id)); // Find blog from state

  const handleClick = () => {
    // Client-side deletion
    const newBlogs = blogs.filter(b => b.id !== parseInt(id));
    setBlogs(newBlogs);
    history.push('/');
  };

  return (
    <div className="blog-details">
      {blog ? (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      ) : (
        <div>Blog not found.</div>
      )}
    </div>
  );
};

export default BlogDetails;