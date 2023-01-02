import React from 'react';
import { Box } from 'components/Box/Box';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

import {
  FilterLabelContainer,
  FilterLabel,
  FilterInput,
} from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <Box
      display={'flex'}
      flexDirection="column"
      alignItems={['center', null, null, null, 'flex-start']}
      gridGap={4}
      mb={5}
    >
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" onChange={handleFilter} />
    </Box>
  );
};

export default Filter;
