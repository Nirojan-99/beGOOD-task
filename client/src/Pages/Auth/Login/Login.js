import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Footer from "../../../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  //error state
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  //hook
  const navigate = useNavigate();

  //user enter value stste
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //submit
  const submitHandler = () => {
    //url
    const baseURL = "http://localhost:8080/users/auth";

    setEmailError(false);
    setPasswordError(false);

    if (!email.trim()) {
      console.log("eee");
      return setEmailError(true);
    }
    if (!password.trim()) {
      return setPasswordError(true);
    }

    axios
      .post(baseURL, { userEmail: email, password: password })
      .then((res) => {
        navigate(`/profile/${res.data.successMessage}`, { replace: true });
      })
      .catch((er) => {
        console.log(er);
        toast("Invalid Credentials", { type: "error" });
      });
  };

  return (
    <>
      <ToastContainer />
      <Box mb={4}>
        <Container maxWidth="sm">
          <Box
            component={Paper}
            elevation={2}
            p={3}
            mt={5}
            sx={{ bgcolor: "#fff" }}
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
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                helperText={emailError && "Valid email required"}
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
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                helperText={passwordError && "Valid password required"}
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
              <Button
                onClick={submitHandler}
                variant="contained"
                disableElevation
                fullWidth
              >
                Log In
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ position: "absolute", width: "100%", bottom: 0 }}>
        <Footer />
      </Box>
    </>
  );
}

export default Login;
