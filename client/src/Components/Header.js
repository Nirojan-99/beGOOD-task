import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Avatar,
  Button,
  Typography,
  Tooltip,
  Divider,
} from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

const Header = () => {
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#1597BB" }} elevation={1}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton href="/" size="large">
              <DirectionsBusIcon
                size="large"
                sx={{ color: "#000", fontSize: 30 }}
              />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 900,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              RTO
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "flex", md: "flex" } }}>
              {
                <>
                  <Button
                    href="/auth/login"
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      // textTransform: "none",
                      fontSize: 15,
                      fontFamily:"open sans",
                      color:"#fff",
                      fontWeight:700
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    href="/auth/register"
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      // textTransform: "none",
                      fontSize: 15,
                      fontFamily:"open sans",
                      color:"#fff",
                      fontWeight:700
                    }}
                  >
                    Register
                  </Button>
                </>
              }
              {false && (
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                  Logout
                </Button>
              )}
            </Box>

            <Box sx={{ flexGrow: 0 }} ml={2}>
              <Tooltip title="Profile">
                <IconButton sx={{ p: 0 }} size="large" href="/profile">
                  <Avatar sx={{ bgcolor: "#fff" }} sizes="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Header;
