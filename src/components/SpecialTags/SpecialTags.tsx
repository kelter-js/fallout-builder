import { FC } from "react";

import { SpecialTagsProps } from "./types";
import { tagNames } from "./constants";
import { TagList, Tag, TagText } from "./SpecialTags.styled";

export const SpecialTags: FC<SpecialTagsProps> = ({
  selectedTag,
  setSelectedTag,
}) => (
  <TagList>
    {tagNames.map((tag, index) => (
      <li key={index}>
        <Tag isActive={tag === selectedTag} onClick={() => setSelectedTag(tag)}>
          <TagText>{tag}</TagText>
        </Tag>
      </li>
    ))}
  </TagList>
);
