import { ChangeEventHandler, useState } from "react";
import { Stack, Typography, Dialog, DialogTitle } from "@mui/material";

import { SaveModes } from "../../entities/SaveModes";
import { Controls } from "./components/Controls";
import { Content } from "./components/Content";
import { ControlButton, BuildNameField } from "./Header.styled";

export const Header = () => {
  const [modalMode, setModalMode] = useState<SaveModes | null>(null);
  const [saveName, setSaveName] = useState("");

  const resetModal = () => {
    setModalMode(null);
    setSaveName("");
  };

  const setLoadMode = () => setModalMode(SaveModes.LOAD);
  const setSaveMode = () => setModalMode(SaveModes.SAVE);

  const handleChangeSaveName: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSaveName(e.target.value);

  return (
    <Stack
      px={5}
      py={2.5}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid var(--white)"
    >
      <Stack direction="row" alignItems="center">
        <img src={`${process.env.PUBLIC_URL}/assets/vaultBoyIcon.svg`} />

        <Typography
          ml={2}
          color="var(--white)"
          lineHeight="23px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="var(--font-family)"
          variant="h1"
        >
          Fallout Build Calculator
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" gap={4}>
        <ControlButton onClick={setLoadMode}>
          <Typography
            color="var(--white)"
            lineHeight="21px"
            fontSize="14px"
            fontWeight="500"
            fontFamily="var(--font-family)"
          >
            My builds
          </Typography>
        </ControlButton>

        <ControlButton onClick={setSaveMode}>
          <Typography
            color="var(--white)"
            lineHeight="21px"
            fontSize="14px"
            fontWeight="500"
            fontFamily="var(--font-family)"
          >
            Save build
          </Typography>
        </ControlButton>
      </Stack>

      <Dialog
        open={Boolean(modalMode)}
        onClose={resetModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <DialogTitle
          id="modal-title"
          sx={{ background: "var(--main-color)", color: "var(--white)" }}
        >
          {modalMode === SaveModes.LOAD ? "Выберите билд" : "Создать билд"}
        </DialogTitle>

        <Content
          isSaveModeSave={modalMode === SaveModes.SAVE}
          resetModal={resetModal}
        >
          <BuildNameField
            fullWidth
            value={saveName}
            onChange={handleChangeSaveName}
            placeholder="Название билда"
          />
        </Content>

        <Controls
          resetModal={resetModal}
          isSaveModeSave={modalMode === SaveModes.SAVE}
          saveName={saveName}
        />
      </Dialog>
    </Stack>
  );
};
