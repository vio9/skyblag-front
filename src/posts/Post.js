import './style-post.scss';

function Post({title, content1, content2, content3, image, legend, creationDate, image2, legend2}){

    const currentDate = new Date(creationDate);
    const formattedDate = currentDate.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year:'numeric',
        hour:'numeric',
        minute: 'numeric',
    })

    return(
        <div className="post">
            <h2 className="title_post">{title}</h2>
            <p className="content_post">{formattedDate}</p>
            <div className="content">
                <p className="content_p un">{content1}</p>
                <p className="content_p deux">{content2}</p>
                <p className="content_p trois">{content3}</p>
                </div>
                <img src={image} className="image_post"/>
                <p className='legend'>{legend}</p>
                <img className="image_post2"src={image2}/>
                <p className='legend'>{legend2}</p>
             
            

           
        </div>
    )
}

export default Post;