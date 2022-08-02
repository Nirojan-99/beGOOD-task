import { Paper, Typography, Button, Divider, Grid, Box } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";

function Footer() {
  return (
    <Box>
      <Grid
        square
        elevation={1}
        component={Paper}
        sx={{ py: 2, px: 1, bgcolor: "#116e88" }}
        container
        justifyContent={"center"}
        alignItems="center"
      >
        <Grid item xs={12} sm={9}>
          <Typography
            variant="subtitle2"
            sx={{ fontFamily: "open sans" }}
            textAlign={{ xs: "center", sm: "left", color: "#fff" }}
          >
            © 2022, made with ❤️ by Silicon Team . All copyrights reserved
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} textAlign={{ xs: "center", sm: "right" }}>
          <Button
            sx={{ color: "#333", color: "#fff" }}
            endIcon={<MessageIcon />}
            variant="text"
            href="/contact-us"
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
