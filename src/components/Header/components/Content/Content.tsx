import { FC } from "react";
import { DialogContent, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { usePerksManager } from "../../../../hooks/usePerksManager";
import { ContentProps } from "./types";
import { LoadBuildButton } from "../../Header.styled";

export const Content: FC<ContentProps> = ({
  isSaveModeSave,
  children,
  resetModal,
}) => {
  const { savedBuilds, selectedBuild, removePerkList, resetCalculator } =
    usePerksManager();

  const handleSelectBuild = (index: number) => {
    resetCalculator(index);
    resetModal();
  };

  const handleDelete = (index: number) => () => {
    removePerkList(index);

    if (savedBuilds.length === 1) {
      resetModal();
    }
  };

  const renderList = () => {
    if (savedBuilds.length === 0) {
      return (
        <Typography
          gutterBottom
          variant="h5"
          color="var(--white)"
          lineHeight="21px"
          fontSize="14px"
          fontWeight="600"
          fontFamily="var(--font-family)"
          sx={{ textShadow: "0 1px 2px var(--main-text-shadow)" }}
          pt={1}
        >
          Список пуст
        </Typography>
      );
    }

    if (savedBuilds.length > 0) {
      return (
        <Stack>
          {savedBuilds.map((item, index) => (
            <Stack key={`${item}-${index}`} width="100%" direction="row">
              <LoadBuildButton
                onClick={() => handleSelectBuild(index)}
                disabled={selectedBuild === index}
              >
                {item.buildName}
              </LoadBuildButton>

              <IconButton
                onClick={handleDelete(index)}
                sx={{ ml: "auto", color: "red" }}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          ))}
        </Stack>
      );
    }

    return null;
  };

  return (
    <DialogContent
      sx={{
        background: "var(--main-color)",
        color: "var(--white)",
        minWidth: 450,
      }}
    >
      {isSaveModeSave && children}

      {!isSaveModeSave && renderList()}
    </DialogContent>
  );
};
