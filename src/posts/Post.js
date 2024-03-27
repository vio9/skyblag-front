import './style-post.scss';
import { Suspense, lazy } from 'react';
import Loader from '../utils/loader/Loader';

function Post({title, content1, content2, content3, image, legend, creationDate, image2, legend2}){

    const currentDate = new Date(creationDate);
    const formattedDate = currentDate.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year:'numeric',
        hour:'numeric',
        minute: 'numeric',
    })

    const LazyImage = lazy(() => import('../utils/LazyImageGeneric'));

    return(
        <div className="post">
            <h2 className="title_post">{title}</h2>
            <p className="content_post">{formattedDate}</p>
            <div className="content">
                <p className="content_p un">{content1}</p>
                <p className="content_p deux">{content2}</p>
                <p className="content_p trois">{content3}</p>
            </div>
            <div className='wrapper-image_post'>
                <div className='wrapper-image-legend'>
                <Suspense fallback={<div><Loader/></div>}>
                     <LazyImage src={image}className="image_post" alt={legend} />
                </Suspense>
                        <p className='legend'>{legend}</p>
                </div>
                <div className='wrapper-image-legend'>
                <Suspense fallback={<Loader/>}>
                    <LazyImage src={image2}className="image_post" alt={legend2} />
                </Suspense>
                        <p className='legend'>{legend2}</p>
                </div>
            </div>
        </div>
    )
}

export default Post;