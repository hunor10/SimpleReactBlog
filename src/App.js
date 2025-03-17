import Navbar from './Navbar';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import useFetch from './useFetch';

function App() {
  const initialBlogs = [
    {
      id: 1,
      title: "The Day React Saved My Project",
      body: "Back in 2017, I was working on a tight deadline for a client who needed a dynamic dashboard. Our initial plan was to use vanilla JavaScript, but the complexity of state management was slowing us down. That’s when I discovered React! Its component-based architecture and state management (using hooks, which came later) saved the day. We delivered the project on time, and the client was thrilled. Fun fact: React was first deployed on Facebook’s News Feed in 2011 and open-sourced in 2013—talk about a game-changer!",
      author: "mario",
    },
    {
      id: 2,
      title: "Why IT Loves Coffee: A Tale of Debugging",
      body: "It’s no secret that IT professionals and coffee go hand in hand. There’s a famous story in IT lore about a bug that took hours to fix—turns out, the developer just needed a coffee break to clear their head! The bug? A missing semicolon in a 10,000-line codebase. This reminds me of my own React debugging sessions—sometimes, a quick coffee break helps you spot that misplaced useEffect dependency. Fun fact: The first computer bug was literally a moth stuck in a relay, found in 1947 by Grace Hopper!",
      author: "yoshi",
    },
    {
      id: 3,
      title: "React’s Virtual DOM: The Magic Behind the Scenes",
      body: "One of the reasons I love React is its Virtual DOM. When I first learned about it, I was blown away by how it optimizes rendering. Instead of updating the entire DOM on every change, React creates a virtual representation, compares it with the real DOM, and only updates what’s necessary. This makes apps like this blog super fast! Fun fact: The concept of a Virtual DOM was popularized by React, but other frameworks like Vue and Svelte have since adopted similar ideas in their own way.",
      author: "mario",
    },
    {
      id: 4,
      title: "The Great IT Migration: From jQuery to React",
      body: "I once worked on a legacy project that was built entirely with jQuery. Every DOM manipulation was a nightmare, and the code was a mess of event listeners. Convincing the team to migrate to React was a challenge, but once we did, the difference was night and day. Components made the code modular, and state management became a breeze. It took us a month, but the app’s performance improved by 40%! Fun fact: jQuery was released in 2006 and dominated web development for nearly a decade before frameworks like React took over.",
      author: "yoshi",
    },
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