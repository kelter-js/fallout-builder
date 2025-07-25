import { FC } from "react";
import { Button, DialogActions, Tooltip, Typography } from "@mui/material";

import { usePerksManager } from "../../../../hooks/usePerksManager";
import { useCharacterStore } from "../../../../store/Character";
import { ControlsProps } from "./types";

export const Controls: FC<ControlsProps> = ({
  resetModal,
  isSaveModeSave,
  saveName,
}) => {
  const { saveToStorageBuild, resetCalculator, selectedBuild } =
    usePerksManager();

  const handleSave = () => {
    resetModal();
    saveToStorageBuild(saveName);
  };

  const { selectedPerks } = useCharacterStore();

  const handleReset = () => {
    resetModal();
    resetCalculator();
  };

  const getTooltipHint = () => {
    if (selectedPerks.length === 0) {
      return "Ни одного перка не выбрано - для создания билда необходим хотя бы один выбранный перк";
    }

    if (saveName.trim() === "") {
      return "Название билда не может быть пустым";
    }

    return "";
  };

  return (
    <DialogActions sx={{ background: "var(--main-color)", p: 2 }}>
      <Button onClick={resetModal}>Отмена</Button>

      {isSaveModeSave && (
        <Tooltip title={getTooltipHint()}>
          <div>
            <Button
              onClick={handleSave}
              variant="contained"
              color="primary"
              disabled={saveName.trim() === "" || selectedPerks.length === 0}
            >
              <Typography
                color="white"
                sx={{ opacity: saveName.trim() === "" ? 0.5 : 1 }}
              >
                Сохранить
              </Typography>
            </Button>
          </div>
        </Tooltip>
      )}

      {!isSaveModeSave && (
        <Button
          onClick={handleReset}
          variant="contained"
          color="primary"
          disabled={selectedBuild === null}
        >
          <Typography
            color="white"
            sx={{ opacity: saveName.trim() === "" ? 0.5 : 1 }}
          >
            Сбросить
          </Typography>
        </Button>
      )}
    </DialogActions>
  );
};
