import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";

import {
  SpecialCard,
  SpecialTags,
  Calculator,
  SearchFeed,
  Container,
  Header,
} from "./components";

import { usePerksStore } from "./hooks/usePerksStore";
import { useCharacterStore } from "./store/Character";
import { SPECIALS } from "./entities/Specials";

const App = () => {
  const [selectedTag, setSelectedTag] = useState<SPECIALS>(SPECIALS.STRENGTH);
  const [search, setSearch] = useState("");

  const { perkList, removePerk, addPerk, allAddCallbacks } =
    usePerksStore(selectedTag);
  const { selectedPerks } = useCharacterStore();

  const renderCards = useMemo(() => {
    if (search && perkList) {
      return perkList.filter((perks) =>
        perks.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return perkList;
  }, [search, perkList]);

  const perks = useMemo(
    () =>
      renderCards?.map((item) => (
        <SpecialCard key={item.perkId} {...item} removePerk={removePerk} />
      )),
    [renderCards, removePerk, allAddCallbacks]
  );

  return (
    <div>
      <Header />

      <Container>
        <Calculator selectedPerks={selectedPerks} addPerk={allAddCallbacks} />

        <SpecialTags
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />

        <SearchFeed search={search} setSearch={setSearch} />

        <Box gap={2} display="grid" gridTemplateColumns="repeat(5, 1fr)">
          {perks}
        </Box>
      </Container>

      <Box
        mt={4}
        p={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderTop="1px solid var(--white)"
      >
        <Typography color="var(--light-grey)" lineHeight={1.4} variant="h5">
          created by kelter
        </Typography>
      </Box>
    </div>
  );
};

export default App;
