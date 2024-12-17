/* eslint-disable react/prop-types */
const ImageComponent = ({ src, fallbackSrc, alt, width, height }) => {
  return (
    <img
      src={src || fallbackSrc}
      alt={alt}
      loading="lazy"
      onError={(e) => { e.target.src = fallbackSrc; }}
      width={width}
      height={height}
      sizes="(max-width: 300px) 100vw, 300px"
      style={{ maxWidth: '100%' }}
    />
  );
};

export default ImageComponent;
