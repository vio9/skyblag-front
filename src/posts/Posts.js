import Post from "./Post";
import { useState, useEffect } from "react";
import axios from "axios";
import './style-post.scss';

function Posts(){

    // scroll 
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
            const scrollTop = window.scrollY;
            if(scrollTop > 500){
                setVisible(true);
            } else {
                setVisible(false)
            }
        }
        const scrollToTop = () => {
            window.scrollTo({
                top:0,
                behavior: "smooth",
            });
        };
    
        useEffect(() => {
            document.addEventListener("scroll", handleScroll);
            return () => {
                document.removeEventListener("scroll", handleScroll)
            }
        }, []);
    
    // posts
    const urlApiPost = process.env.REACT_APP_API_POST; 
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try{
            const result = await axios.get(urlApiPost);
            const sortedPosts = result.data.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
            setPosts(sortedPosts);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        getPosts();
    }, []) 
 


return(
    <div className="posts">
        {
            posts.map(item => (
                <>
                          <button id={`scroll-button-${visible ? "visible" : ""}`}onClick={scrollToTop}>scroll to top</button>
                <Post
                    key={item.id}
                    creationDate={item.creationDate}
                    title={item.title}
                    content1={item.content1}
                    content2={item.content2}
                    content3={item.content3}
                    image={item.image}
                    legend={item.legend}
                    image2={item.image2}
                    legend2={item.legend2}
                />
   
                </>
            ))
        }
        
    </div>
)

    }
export default Posts;

//test 