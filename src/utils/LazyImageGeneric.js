import { lazy, Suspense } from 'react';

const LazyImageGeneric = ({ src, ...rest }) => {
  const ImageComponent = lazy(() => import('../utils/LazyImageComponent'));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImageComponent src={src}  {...rest} />
    </Suspense>
  );
};

export default LazyImageGeneric;