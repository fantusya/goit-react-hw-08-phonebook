import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  return {
    contacts,
    isLoading,
    filter,
    error,
    visibleContacts,
  };
};
