import { lazy, Suspense } from 'react';
import Loader from '../loader/Loader';

const LazyPlayer = ({ src, ...rest }) => {
  const Player = lazy(() => import('../player/Player'));
  return (
    <Suspense fallback={<Loader/>}>
      <Player src={src}  {...rest} />
    </Suspense>
  );
};

export default LazyPlayer;