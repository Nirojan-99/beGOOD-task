import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

function Login() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  return (
    <>
      <Box>
        <Container maxWidth="sm">
          <Box
            component={Paper}
            elevation={1}
            p={3}
            mt={5}
            sx={{ bgcolor: "#ddd" }}
          >
            <Typography align="center" fontSize={20} letterSpacing={0.3}>
              Welcome Back,
            </Typography>
            <Box my={2}>
              <TextField
                inputProps={{
                  style: { color: "#555", letterSpacing: 0.2, fontWeight: 400 },
                }}
                placeholder="E-mail/Contact No"
                margin="dense"
                fullWidth
                color="info"
                error={emailError}
                autoFocus
                autoComplete="email"
                required
                type={"email"}
              />
            </Box>
            <Box mt={2}>
              <TextField
                inputProps={{
                  style: { color: "#555", letterSpacing: 0.2, fontWeight: 400 },
                }}
                placeholder="Password"
                margin="dense"
                fullWidth
                color="info"
                error={passwordError}
                required
                type="password"
              />
            </Box>
            <Box sx={{ display: "flex" }} mt={1}>
              <Box sx={{ flexGrow: 1 }} />
              <Button href="/auth/register">
                <Typography
                  sx={{ textTransform: "none", color: "#555" }}
                  fontSize={13}
                  fontFamily={"open sans"}
                  fontWeight={800}
                >
                  Don't have account?
                </Typography>
              </Button>
            </Box>
            <Box my={2}>
              <Button variant="contained" disableElevation fullWidth>
                Log In
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Login;
