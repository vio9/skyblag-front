function Post({title, content, image, creationDate}){
    return(
        <div className="post">
            <h2 className="title_post">{title}</h2>
            <p className="content_post">{creationDate}</p>
            <img src={image} className="image_post"/>
            <div className="content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Post;