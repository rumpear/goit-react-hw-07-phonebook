import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Item, Text } from './ContactsItem.styled';
import { VscClose } from 'react-icons/vsc';
import { removeContact } from '../../../redux/contactsOperations';

export const ContactsItem = ({ id, name, number }) => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();
  const handleDeleteContact = currentId => {
    dispatch(removeContact(currentId));
  };

  return (
    <Item>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <Button
        type="button"
        disabled={isLoading}
        onClick={() => handleDeleteContact(id)}
      >
        <VscClose size={20} />
      </Button>
    </Item>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
