import GppBadIcon from "@mui/icons-material/GppBad";
import { Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Footer from "../../Components/Footer";

function Error() {
  return (
    <>
      <Box>
        <Container maxWidth="sm">
          <Box
            component={Paper}
            p={2}
            elevation={1}
            mt={4}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <GppBadIcon sx={{ color: "red", fontSize: 100 }} />
            <Box
              ml={3}
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4">Page Not Found</Typography>
              <Typography sx={{ color: "red" }}>Error 404!</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Footer />
      </Box>
    </>
  );
}

export default Error;
