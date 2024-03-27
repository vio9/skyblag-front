import { lazy, Suspense } from 'react';
import Loader from './loader/Loader';

const LazyImageGeneric = ({ src, ...rest }) => {
  const ImageComponent = lazy(() => import('../utils/LazyImageComponent'));
  return (
    <Suspense fallback={<Loader/>}>
      <ImageComponent src={src}  {...rest} />
    </Suspense>
  );
};

export default LazyImageGeneric;