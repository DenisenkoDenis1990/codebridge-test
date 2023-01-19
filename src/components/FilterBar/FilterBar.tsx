import { Box, Divider } from "@mui/material";
import { FC } from "react";
import { SearchInput } from "./FilterBar.styled";
import { Title } from "./FilterBar.styled";
import { ResultLabel } from "./FilterBar.styled";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

type FilterBarProps = {
  resultsCount: number;
  onChange: Function;
  value: string;
  searchQuery: string;
};

export const FilterBar: FC<FilterBarProps> = ({
  value,
  resultsCount,
  onChange,
  searchQuery,
}) => {
  return (
    <Box>
      <Title>Filter by keywords</Title>
      <SearchInput
        type="text"
        name="filter"
        placeholder="Enter keyword"
        value={value}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => onChange(e.target.value)}
      ></SearchInput>
      {searchQuery.length > 0 && (
        <ResultLabel>Results: {resultsCount}</ResultLabel>
      )}
      <Divider />
    </Box>
  );
};
