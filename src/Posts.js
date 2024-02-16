import Post from "./Post";
import { useState, useEffect } from "react";
import axios from "axios";

function Posts(){
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try{
            const result = await axios.get('http://localhost:4400/api/getAll');
            setPosts(result.data)
            console.log(result.data)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, []) 

return(
    <div className="posts">
        {
            posts.map(item => (
                <Post
                    creationDate={item.creationDate}
                    title={item.title}
                    content1={item.content1}
                    content2={item.content2}
                    content3={item.content3}
                    image={item.image}
                />
            ))
        }
        
    </div>
)
}

export default Posts;

//test 