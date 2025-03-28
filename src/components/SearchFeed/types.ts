import { Dispatch, SetStateAction } from "react";

export interface SearchFeedProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
