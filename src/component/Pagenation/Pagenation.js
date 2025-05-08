import React from "react";
import { Pagination, Stack } from "@mui/material";
import { paginationStyles } from "./CustomPaginationStyle";

export const CustomPagination = ({ pages, currentPage, setCurrentPage }) => {
  if (pages <= 1) return null;

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Stack spacing={2} alignItems="center" mt={4}>
      <Pagination
        count={pages}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        color="primary"
        size="large"
        sx={paginationStyles}
      />
    </Stack>
  );
};
