import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/contactsAsyncSlice';
import { getFilterValue } from '../../redux/contactsSelectors';
import { Title, Input } from './ContactsFilter.styled';

export const ContactsFilter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleSearchContact = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <div>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        name="filter"
        required
        value={filterValue}
        onChange={handleSearchContact}
      />
    </div>
  );
};
