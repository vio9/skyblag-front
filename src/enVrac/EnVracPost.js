import "./envrac-post.scss";

function EnVracPost({title, image, content}){
    return(
        <div className="wrapper-post-envrac">
            <h4 className="title-post-envrac">{title}</h4>
            <img className="image-post-envrac" src={image} alt={title}/>
            <p className="content-post-envrac">{content}</p>
        </div>
    )
}

export default EnVracPost;