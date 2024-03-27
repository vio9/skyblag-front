import "./envrac-post.scss";
import React, { Suspense, lazy } from 'react';
import LazyImageGeneric from "../utils/LazyImageGeneric";

function EnVracPost({title, image, content}){

    const LazyImage = lazy(() => import('../utils/LazyImageGeneric'));



    return(
        <div className="wrapper-post-envrac">
            <h4 className="title-post-envrac">{title}</h4>
            <Suspense fallback={<div>Loading Image...</div>}>
                <LazyImage src={image} alt={title} className="image-post-envrac" />
            </Suspense>
            <p className="content-post-envrac">{content}</p>
        </div>
    )
}

export default EnVracPost;