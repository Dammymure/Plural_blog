import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => {

 const posts = [
   {
     id: 1,
     title:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi omnis numquam assumenda, ",
     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi omnis numquam assumenda",
     img: "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_640.jpg",
   },
   {
     id: 2,
     title:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi omnis numquam assumenda, ",
     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi omnis numquam assumenda",
     img: "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_640.jpg",
   },
   {
     id: 3,
     title:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi omnis numquam assumenda, ",
     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi omnis numquam assumenda",
     img: "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_640.jpg",
   },
   {
     id: 4,
     title:
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi omnis numquam assumenda, ",
     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi omnis numquam assumenda",
     img: "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_640.jpg",
   },
 ];

 return (
   <div className="home">
     <div className="posts">
       {posts.map((post) => (
         <div className="post" key={post.id}>
           <div className="img">
             <img src={post.img} alt=""/>
           </div>
           <div className="content">
             <Link className="link" to={`/post/${post.id}`}>
               <h1>{post.title}</h1>
             </Link>
             <p>{post.desc}</p>
             <button>Read more</button>
           </div>
         </div>
       ))}
     </div>
   </div>
 );
}

export default Home;