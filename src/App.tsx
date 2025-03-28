import { Calculator } from "./components/Calculator";
import { SearchFeed } from "./components/SearchFeed";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { SpecialTags } from "./SpecialTags";
import { useMemo, useState } from "react";
import { SPECIALS } from "./entities/Specials";
import { usePerksStore } from "./hooks/usePerksStore";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

const App = () => {
  const [selectedTag, setSelectedTag] = useState<SPECIALS>(SPECIALS.STRENGTH);
  const [search, setSearch] = useState("");

  const selectedPerks = usePerksStore(selectedTag);
  console.log(selectedPerks);

  const renderCards = useMemo(() => {
    if (search && selectedPerks) {
      return selectedPerks.filter((perks) =>
        perks.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return selectedPerks;
  }, [search, selectedPerks]);

  console.log("renderCards", renderCards);

  return (
    <div className="App">
      <Header />

      <Container>
        <Calculator />

        <SpecialTags
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />

        <SearchFeed search={search} setSearch={setSearch} />

        <Stack direction="row" gap={2} flexWrap="wrap">
          {renderCards?.map((item, index) => (
            <Card
              sx={{ maxWidth: "15.69%", background: "var(--text-color)" }}
              key={index}
            >
              <CardMedia
                sx={{ width: "100%", height: 250, objectFit: "contain" }}
                image={item.iconSource}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.getDescriptionBasedOnStars(item.selectedStars)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </div>
  );
};

export default App;
