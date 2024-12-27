import { useState, ChangeEventHandler } from "react";
import { InputAdornment, TextField } from "@mui/material";

import { Container, Title } from "./SearchFeed.styled";

export const SearchFeed = () => {
  const [search, setSearch] = useState("");

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

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
                alt="React Logo"
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
