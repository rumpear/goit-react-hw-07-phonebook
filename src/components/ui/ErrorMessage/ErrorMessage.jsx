import PropTypes from 'prop-types';

export const ErrorMessage = ({ message }) => {
  return <p>Something went wrong: {message}. Please reload the page</p>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
