//  import {useState, useEffect } from 'react'
 import BlogList from './BlogList';
 import useFetch from './useFetch';

 const Home = () => {
    // const[name,setName] = useState('alma');
    // const handleClick= (e) => {
    //     setName('banan');
    // }
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs') //data valtozot elnevezzuk blogs-al
    //const [name,setName]=useState('valami');
    // const [blogs,setBlogs]= useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);
    // const [blogs,setBlogs]=useState(null);
    // const [isPending,setIsPending]=useState(true);
    // const [error,setError]=useState(null);
    // const handleDelete=(id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs);
    // }

   

    return ( 
         <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
        {/*  <h2>Homepage</h2>
             <p>{name}</p>
             <button onClick={handleClick}>Click me</button> */}
            {blogs && <BlogList blogs={blogs} title="All Blogs"  />}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario Blogs" /> */}
            {/* <button onClick={()=>setName('ujnev')}>change name</button>
            <p>{name}</p> */}
        </div>
     ); 
 }
  
 export default Home
 