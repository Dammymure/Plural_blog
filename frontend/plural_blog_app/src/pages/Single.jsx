import React from 'react';
import Delete from '../img/delete.svg';
import Edit from '../img/edit.svg';
import {Link} from "react-router-dom"
import Menu from '../components/Menu';


const Single = () => {
 return (
   <div className="single">
     <div className="content">
       <img
         src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_640.jpg"
         alt=""
       />
       <div className="user">
         <img
           src="https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911329_640.jpg"
           alt=""
         />
         <div className="info">
           <span>John</span>
           <p>Posted 2 days ago</p>
         </div>
          <div className="edit">
           <Link to={`/write?edit=2`}>
           <img src={Edit} alt="" className='svg' />
           </Link>
           <img src={Delete} alt="" className='svg'/>
          </div>
       </div>
       <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa pariatur quidem non? Recusandae dolor delectus praesentium voluptas officiis saepe accusamus! Eaque voluptates nesciunt ab illum quae perferendis adipisci laboriosam sapiente?</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, possimus blanditiis? Aliquam ut, magni harum fuga, sequi nesciunt sit iste recusandae, vitae facilis veniam autem et? Odit quo quae amet repellendus similique. Nam sequi iusto fugiat? Aut, harum hic. Culpa fugit labore autem quos itaque vero architecto distinctio, soluta voluptatum.<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aperiam voluptatum laborum aspernatur quisquam totam minus cumque ipsam, repellendus modi unde nihil officiis veniam repudiandae temporibus. Doloribus natus deleniti rem, reiciendis perferendis magnam eum at laborum, illum provident maiores culpa?
       </p>
     </div>
     <Menu/>
   </div>
 )
}

export default Single;