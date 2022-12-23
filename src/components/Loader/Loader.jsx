import { ColorRing } from 'react-loader-spinner';

const Loader = ({ sizeValue }) => {
  return (
    <ColorRing
      visible={true}
      height={sizeValue}
      width={sizeValue}
      ariaLabel="blocks-loading"
      wrapperClass="blocks-wrapper"
      colors={['#8185ce', '#B2A3B5', '#7773a8', '#51E5FF', '#429EA6']}
    />
  );
};

export default Loader;
