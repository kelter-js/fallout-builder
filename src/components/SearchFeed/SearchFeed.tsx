import { ChangeEventHandler, FC } from "react";
import { InputAdornment } from "@mui/material";

import { SearchFeedProps } from "./types";
import { Container, Input, Title } from "./SearchFeed.styled";

export const SearchFeed: FC<SearchFeedProps> = ({ search, setSearch }) => {
  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => setSearch("");

  return (
    <Container>
      <Input
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img
                src={`${process.env.PUBLIC_URL}/assets/SearchIcon.svg`}
                alt="search Logo"
              />
            </InputAdornment>
          ),
          endAdornment: search && (
            <InputAdornment position="end" onClick={clearSearch}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/CloseIcon.svg`}
                alt="clear Logo"
                style={{ cursor: "pointer" }}
              />
            </InputAdornment>
          ),
        }}
        value={search}
        onChange={handleSearch}
        placeholder="Search for perk card"
      />
      <Title>Available Cards</Title>
    </Container>
  );
};
