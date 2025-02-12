import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ApplicationsPagination = ({ currentPage, total, itemsPerPage, onPageChange }) => {
  const totalPages = total > 0 ? Math.ceil(total / itemsPerPage) : 1;

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}   // Total number of pages
        page={currentPage}   // Current page number
        onChange={onPageChange}  // Handle page change
        color="primary"
        size="large"
        disabled={total === 0}  // Disable pagination if there are no items
      />
    </Stack>
  );
};

export default ApplicationsPagination;
