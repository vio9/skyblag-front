import Post from "./Post";
import UseFetch from "../utils/hook/UseFetch";
import "./style-post.scss";
import HandleScroll from "../utils/handlescroll/HandleScroll";
import Loader from "../utils/loader/Loader";
import React from "react";
import { useState } from "react";

function Posts() {
	const urlApiPost = process.env.REACT_APP_API_POST;
	const { data, loading, error } = UseFetch(urlApiPost);
	const [toggleHide, setToggleHide] = useState(false);
	const [buttonText, setButtonText] = useState("Lire plus de posts")

	const sortedPosts = data.sort(
		(a, b) => new Date(b.creationDate) - new Date(a.creationDate)
	);
	const onlyThreePosts = sortedPosts.slice(0,3);
	const largeLoader = true;

	function handleClick(){
		if(!toggleHide){
			setButtonText("Cacher")
		} else{
			setButtonText('Lire plus de posts')
		}
		setToggleHide(!toggleHide)
	}

	return (
		<div className="posts">
			
			{loading? (
				<Loader sizeLoader={largeLoader} /> 
			) : (
				<>
					{!toggleHide ? 
						onlyThreePosts.map((item, index) =>
							<React.Fragment key={index}>
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
							</React.Fragment>) :
						(sortedPosts.map((item, index) => (
							<React.Fragment key={index}>
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
							</React.Fragment>))
					)}
					<button className="read-more-button" onClick={() => handleClick()}>{buttonText}</button>
				</>
			)}
		</div>
	);
}
export default Posts;


