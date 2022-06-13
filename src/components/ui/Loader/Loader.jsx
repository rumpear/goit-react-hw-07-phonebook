import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';

export const Loader = ({ size = 70 }) => {
  return (
    <ClipLoader
      size={size}
      css={`
        display: block;
        margin: 0 auto;
        border-color: #0099ff;
      `}
    />
  );
};

Loader.propTypes = {
  size: PropTypes.number,
};
