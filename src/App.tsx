import { Calculator } from "./components/Calculator";
import { SearchFeed } from "./components/SearchFeed";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { SpecialTags } from "./SpecialTags";
import { useState } from "react";
import { SPECIALS } from "./entities/Specials";
import { usePerksStore } from "./hooks/usePerksStore";

const App = () => {
  const [selectedTag, setSelectedTag] = useState<SPECIALS>(SPECIALS.STRENGTH);
  const data = usePerksStore(selectedTag);
  console.log(data);

  return (
    <div className="App">
      <Header />

      <Container>
        <Calculator />
        <SpecialTags
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        {data?.map((item) => (
          <img src={item.iconSource} />
        ))}
        <SearchFeed />
      </Container>
    </div>
  );
};

export default App;
