import BlogList from './BlogList';

const Home = ({ blogs, isPending, error }) => {
  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && blogs.length > 0 ? (
        <BlogList blogs={blogs} title="All Blogs" />
      ) : (
        !isPending && <div>No blogs to display.</div>
      )}
    </div>
  );
};

export default Home;