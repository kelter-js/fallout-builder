import { Button, Stack, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Stack
      px={5}
      py={2.5}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ borderBottom: "1px solid #fff" }}
    >
      <Stack direction="row" alignItems="center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/vaultBoyIcon.svg`}
          alt="React Logo"
        />
        <Typography
          sx={{
            fontFamily: "var(--font-family)",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "23px",
            color: "#fff",
            ml: (theme) => theme.spacing(2),
          }}
          variant="h1"
        >
          Fallout Build Calculator
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" gap={4}>
        <Typography
          sx={{
            fontFamily: "var(--font-family)",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "21px",
            color: "#fff",
          }}
        >
          My builds
        </Typography>
        <Typography
          sx={{
            fontFamily: "var(--font-family)",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "21px",
            color: "#fff",
          }}
        >
          Community
        </Typography>
        <Button
          sx={{
            borderRadius: (theme) => theme.spacing(1),
            padding: "0px 10px",
            background: "#473624",
            height: "40px",
            "&:hover": {
              opacity: 0.7,
              background: "#473624",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-family)",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "21px",
              color: "#fff",
            }}
          >
            Favorite builds
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};
