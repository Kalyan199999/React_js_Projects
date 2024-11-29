import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = "https://dummyjson.com/posts/";

function SinglePost() {
    
    const {id} = useParams();

    const [post , setPost] = useState();
    useEffect(()=>{ 
        getData();
    } ,[])

    const getData = async ()=>{
        const d = await axios.get(`${API}${id}`)
        console.log(d.data);

        setPost(d.data)
        
    }
    
  return (
    <div>
      {
        !post ? "Loading...":
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
      }
    </div>
  )
}

export default SinglePost
