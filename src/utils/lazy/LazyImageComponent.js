
const LazyImageComponent = ({ src, ...rest }) => {
  return <img src={src} {...rest} />; 
};

export default LazyImageComponent;