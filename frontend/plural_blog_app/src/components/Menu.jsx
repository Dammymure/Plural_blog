import React from 'react';

const Menu = () => {
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
  <div class="menu">
   <h1>Other posts you may like</h1>
   {posts.map(post=>(
    <div class="post" key={post.id}>
     <img src={post.img} alt=""/>
     <h2>{post.title}</h2>
     <button>Read More</button>
    </div>
   ))}
 </div>);
}


export default Menu;