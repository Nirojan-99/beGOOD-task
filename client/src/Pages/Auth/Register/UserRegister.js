import {
  Button,
  Box,
  TextField,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function UserRegister(props) {
  //error state
  const [emailError, setEmailError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [nicError, setNicError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  //user data
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [NIC, setNIC] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  //url
  const baseURL = "http://localhost:8080/users";

  const handleSubmit = () => {
    setEmailError(false);
    setUserError(false);
    setNicError(false);
    setNumberError(false);
    setPasswordError(false);

    if (!email.trim()) {
      return setEmailError(true);
    }
    if (!userName.trim()) {
      return setUserError(true);
    }
    if (!NIC.trim()) {
      return setNicError(true);
    }
    if (!number.trim()) {
      return setNumberError(true);
    }
    if (!password.trim()) {
      return setPassword(true);
    }

    axios
      .post(baseURL, {
        userName,
        userEmail: email,
        contactNo: number,
        password,
        nic: NIC,
      })
      .then((res) => {
        props.handleNext();
      })
      .catch((er) => {
        toast("Unable to register", { type: "error" });
      });
  };

  return (
    <>
      <ToastContainer />
      <Box mt={3} component={Paper} elevation={2} p={2}>
        <Typography align="left" sx={{ color: "#1597BB" }} fontSize={20}>
          Register User
        </Typography>
        <Divider sx={{ my: 2, borderBottomWidth: 2.5 }} />
        <Box mt={2} mb={1}>
          <TextField
            required
            autoFocus
            type="email"
            fullWidth
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            margin="dense"
            label="Email"
            FormHelperTextProps={{
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
            }}
            helperText={emailError && "example@email.com"}
            error={emailError}
            inputProps={{
              style: {
                fontFamily: "open sans",
                fontWeight: 700,
                color: "#333",
              },
            }}
            InputLabelProps={{
              style: { fontSize: 15, fontWeight: 700, fontFamily: "open sans" },
            }}
          />
        </Box>
        <Box mb={1}>
          <TextField
            required
            type="text"
            fullWidth
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
            margin="dense"
            label="User Name"
            error={userError}
            inputProps={{
              style: {
                fontFamily: "open sans",
                fontWeight: 700,
                color: "#333",
              },
            }}
            InputLabelProps={{
              style: { fontSize: 15, fontWeight: 700, fontFamily: "open sans" },
            }}
          />
        </Box>
        <Box mb={1}>
          <TextField
            required
            type="text"
            fullWidth
            value={NIC}
            onChange={(event) => {
              setNIC(event.target.value);
            }}
            margin="dense"
            label="NIC"
            error={nicError}
            FormHelperTextProps={{
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
            }}
            helperText={nicError && "123456789v"}
            inputProps={{
              style: {
                fontFamily: "open sans",
                fontWeight: 700,
                color: "#333",
              },
            }}
            InputLabelProps={{
              style: { fontSize: 15, fontWeight: 700, fontFamily: "open sans" },
            }}
          />
        </Box>
        <Box mb={1}>
          <TextField
            required
            type="number"
            fullWidth
            value={number}
            onChange={(event) => {
              setNumber(event.target.value);
            }}
            margin="dense"
            label="Contact Number"
            error={numberError}
            FormHelperTextProps={{
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
            }}
            helperText={numberError && "07xxxxxxxx"}
            inputProps={{
              style: {
                fontFamily: "open sans",
                fontWeight: 700,
                color: "#333",
              },
            }}
            InputLabelProps={{
              style: { fontSize: 15, fontWeight: 700, fontFamily: "open sans" },
            }}
          />
        </Box>
        <Box mb={1}>
          <TextField
            required
            type="password"
            fullWidth
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            margin="dense"
            label="Password"
            error={passwordError}
            FormHelperTextProps={{
              style: { fontWeight: 700, fontFamily: "open sans", color: "red" },
            }}
            helperText={passwordError && "must contain 6 characters"}
            inputProps={{
              style: {
                fontFamily: "open sans",
                fontWeight: 700,
                color: "#333",
              },
            }}
            InputLabelProps={{
              style: { fontSize: 15, fontWeight: 700, fontFamily: "open sans" },
            }}
          />
        </Box>
        <Box mt={2}>
          <Button onClick={handleSubmit} fullWidth variant="contained">
            Submit
          </Button>
          <Box sx={{ display: "flex" }} mt={1}>
            <Box sx={{ flexGrow: 1 }} />
            <Button href="/auth/login">
              <Typography
                sx={{ textTransform: "none", color: "#555" }}
                fontSize={13}
                fontFamily={"open sans"}
                fontWeight={800}
              >
                Already have account?
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
