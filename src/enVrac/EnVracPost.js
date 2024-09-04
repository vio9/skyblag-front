import Loader from "../utils/loader/Loader";
import "./envrac-post.scss";
import { Suspense, lazy } from 'react';

function EnVracPost({title, image, content}){

    const LazyImage = lazy(() => import('../utils/lazy/LazyImageGeneric'));

    return(
        <div className="wrapper-post-envrac">
            <h4 className="title-post-envrac">{title}</h4>
            <Suspense fallback={<div><Loader/></div>}>
                <LazyImage src={image} alt={title} className="image-post-envrac" />
            </Suspense>
            <p className="content-post-envrac">{content}</p>
        </div>
    )
}

export default EnVracPost;