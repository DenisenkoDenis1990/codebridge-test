import { Box, Divider } from "@mui/material";
import { FC } from "react";
import { SearchInput } from "./FilterBar.styled";
import { SearchIcon } from "./FilterBar.styled";
import { Title } from "./FilterBar.styled";
import { ResultLabel } from "./FilterBar.styled";

type FilterBarProps = {
  resultsCount: number;
  onChange: Function;
};

export const FilterBar: FC<FilterBarProps> = ({ resultsCount, onChange }) => {
  return (
    <Box>
      <Title>Filter by keywords</Title>
      <SearchIcon />
      <SearchInput
        type="text"
        name="filter"
        placeholder="Enter keyword"
        onChange={(e) => onChange(e.target.value)}
      ></SearchInput>
      {resultsCount > 0 ?? <ResultLabel>Results: {resultsCount}</ResultLabel>}
      <Divider />
    </Box>
  );
};
