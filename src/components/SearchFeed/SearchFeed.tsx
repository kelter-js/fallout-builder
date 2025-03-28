import { useState, ChangeEventHandler, FC } from "react";
import { InputAdornment, TextField } from "@mui/material";

import { Container, Title } from "./SearchFeed.styled";
import { SearchFeedProps } from "./types";

export const SearchFeed: FC<SearchFeedProps> = ({ search, setSearch }) => {
  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => setSearch("");

  return (
    <Container>
      <TextField
        fullWidth
        sx={{
          bgcolor: "var(--tag-color)",
          borderRadius: (theme) => theme.spacing(1),
          marginTop: (theme) => theme.spacing(3),
          input: {
            fontFamily: "var(--font-family)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--text-color)",

            "&::placeholder": {
              fontFamily: "var(--font-family)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "var(--text-color)",
            },
          },
        }}
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
