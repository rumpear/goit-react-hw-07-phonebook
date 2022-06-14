import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Item, Text } from './ContactsItem.styled';
import { VscClose } from 'react-icons/vsc';
import { removeContact } from '../../../redux/contactsOperations';
import { useState } from 'react';
import { getErrorValue } from '../../../redux/contactsSelectors';
// import { ErrorMessage } from '../../ui/ErrorMessage';
import { Loader } from '../../ui/Loader';

export const ContactsItem = ({ id, name, number }) => {
  // const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();
  const error = useSelector(getErrorValue);

  const [loading, setLoading] = useState(false);
  const handleDeleteContact = currentId => {
    if (id === currentId) setLoading(true);
    dispatch(removeContact(currentId));
  };

  if (error) setLoading(false);

  return (
    <Item>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <Button
        type="button"
        disabled={loading}
        onClick={() => handleDeleteContact(id)}
      >
        {loading ? <Loader size={15} /> : <VscClose size={20} />}
      </Button>
    </Item>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
