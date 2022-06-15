import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { VscClose } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { removeContact } from '../../../redux/contactsOperations';
import { getErrorValue } from '../../../redux/contactsSelectors';
import { Loader } from '../../ui/Loader';
import { Button, Item, Text } from './ContactsItem.styled';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const error = useSelector(getErrorValue);
  const [loading, setLoading] = useState(false);

  const handleDeleteContact = async currentId => {
    if (id === currentId) setLoading(true);
    try {
      await dispatch(removeContact(currentId)).unwrap();
    } catch (error) {
      toast.error(error);
    }
  };

  //* alternative
  // const handleDeleteContact = currentId => {
  //   if (id === currentId) setLoading(true);
  //   dispatch(removeContact(currentId));
  // };

  // useEffect(() => {
  //   if (error && loading) {
  //     setLoading(false);
  //     toast.error(error);
  //   }
  // }, [error, loading]);

  return (
    <Item>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <Button
        type="button"
        disabled={loading || error}
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
