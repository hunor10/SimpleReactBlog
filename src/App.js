import Navbar from './Navbar';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import useFetch from './useFetch';

function App() {
  const initialBlogs = [
    { id: 1, title: "My First Blog", body: "This is the content of my first blog post.", author: "mario" }
  ];
  const { data: blogs, setData: setBlogs, isPending, error } = useFetch(null, initialBlogs);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home blogs={blogs} isPending={isPending} error={error} />
          </Route>
          <Route exact path="/create">
            <Create blogs={blogs} setBlogs={setBlogs} />
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetails blogs={blogs} setBlogs={setBlogs} />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;