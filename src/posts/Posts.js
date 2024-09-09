import Post from "./Post";
import UseFetch from "../utils/hook/UseFetch";
import './style-post.scss';
import HandleScroll from "../utils/handlescroll/HandleScroll";
import Loader from "../utils/loader/Loader";
import React  from 'react';

function Posts(){

    const urlApiPost = process.env.REACT_APP_API_POST; 
    const {data, loading, error} = UseFetch(urlApiPost)
    const sortedPosts = data.sort((a,b) => new Date(b.creationDate) - new Date(a.creationDate))
    const largeLoader = true;

    return (
        <div className="posts">
            {loading ? (              
                <Loader sizeLoader={largeLoader}/>
            ) : (
                sortedPosts.map(item => (
                    <React.Fragment key={item.id}>
                        <HandleScroll />
                        <Post
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
                    </React.Fragment>
                ))
            )}
        </div>
    );

    }
export default Posts;

//test 