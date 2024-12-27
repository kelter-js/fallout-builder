import { FC } from "react";
import { SPECIALS } from "../entities/Specials";
import { TagList, Tag, TagText } from "./SpecialTags.styled";

const tagNames = Object.values(SPECIALS);

interface SpecialTagsProps {
  selectedTag: SPECIALS;
  setSelectedTag: (tag: SPECIALS) => void;
}

export const SpecialTags: FC<SpecialTagsProps> = ({
  selectedTag,
  setSelectedTag,
}) => {
  return (
    <TagList>
      {tagNames.map((tag, index) => (
        <li key={index}>
          <Tag
            isActive={tag === selectedTag}
            onClick={() => setSelectedTag(tag)}
          >
            <TagText>{tag}</TagText>
          </Tag>
        </li>
      ))}
    </TagList>
  );
};
