function Post({title, content1, content2, content3, image, creationDate}){

    const currentDate = new Date(creationDate);
    const formattedDate = currentDate.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year:'numeric',
        hour:'numeric',
        minute: 'numeric',
        second: 'numeric'
    })

    return(
        <div className="post">
            <h2 className="title_post">{title}</h2>
            <p className="content_post">{formattedDate}</p>
            <img src={image} className="image_post"/>
            <div className="content">
                <p className="content_p">{content1}</p>
                <p className="content_p">{content2}</p>
                <p className="content_p">{content3}</p>
            </div>
        </div>
    )
}

export default Post;