import './post.css'

import axios from "axios"
import { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

import SinglePost from './SinglePost';

const API = "https://dummyjson.com/posts";

function PostApi() {

    const [data,setData] = useState();
    useEffect(()=>{
        getData();
    } , [])

    const getData = async ()=>{

        try {
            const d = await axios.get(API);
            // console.log(d);
            setData(d.data.posts);
            
        } catch (error) {
            
        }
    }

    // const handleClick = (post) =>{
    //     console.log(post);
    // }


  return (
    <>
      {
        !data ? "Loading.....":

        <div className="all-posts">
            {
                data.map((post)=>{
                    return (

                        <div className="post-card" key={post.id}>
                        <h3>{post.title}</h3>
                        <p>🧡{post.reactions.likes}</p>
                        <p>☹{post.reactions.dislikes}</p>
                        <p>👁{post.views}</p>
                        <p>
                            Tags: 
                            {
                                post.tags.map((tag)=>{
                                    return <span key={tag}> {tag}  </span>
                                })
                            }
                        </p>

                        <Link to={`/post/${post.id}`}><button  onClick={()=>{<SinglePost  />}}>Read more</button></Link>
                   
                    </div>
                    )
                })
            }
        </div>
      }
    </>
  )
}

export default PostApi
